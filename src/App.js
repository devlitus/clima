import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/error';
import Clima from './componentes/Clima';

class App extends Component {
  state = {
    error: '',
    consulta: {},
    resultado: {}
  }
  componentDidUpdate(prevProp, prevState){
    if (prevState.consulta !== this.state.consulta){
      this.consultaApi();
      console.log(prevState);
      
    }
  }
  componentDidMount(){
    this.setState({
      error: false
    })
  }
  consultaApi = () =>{
    const {ciudad, pais} = this.state.consulta;
    if (!ciudad || !pais) return null;
    const apiKey= '8865b470572364e0ff109cbdb985c6b5';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;
    fetch(url)
    .then(respons => {
      return respons.json();
    })
    .then(datos => {
      console.log(datos);
      this.setState({
        resultado: datos
      })
    })
    .catch(error => console.log('Error api ', error));
  }
    
  
  datosConsulta = respuesta => {
    if (respuesta.ciudad === '' || respuesta.pais ==='') {
      this.setState({
        error: true
      })
    }else{
      this.setState({
        consulta: respuesta,
        error: false
      })
      
    }
  }
  render() {
    const error = this.state.error;
    let resultado;  
    if (error) {
      resultado = <Error mensaje="Ambos campos son obligatorios" />
    }else{
      resultado = <Clima resultado = {this.state.resultado}/>
    }
    return (
      <div className="app">
        <Header titulo="Clima" />
        <Formulario datosConsulta={this.datosConsulta} />
        {resultado}
      </div>
    );
  }
}

export default App;
