import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Clima extends Component {
    mostrarResultado = () => {
        const {name, weather, main} = this.props.resultado;
        if (!name || !weather || !main) return null;
        const kelvin = 273.15;
        const urlIcon = `http://api.openweathermap.org/img/w/${weather[0].icon}.png`;
        const alt = `clima de ${name}`;
        return (
            <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card-panel light-blue center-align">
                        <samp className="white-text">
                            <h2>Resultado Clima</h2>
                            <p className="temperatura">
                                Actual: {(main.temp - kelvin).toFixed(2)} &deg;C
                                <img src={urlIcon} alt={alt} />
                            </p>
                            <p>Max. {main.temp_max - kelvin} &deg;C</p>
                            <p>Min. {main.temp_min - kelvin} &deg;C</p>
                        </samp>
                    </div>
                </div>
            </div>
        )
    }

    render() {
    
        return (
            <div className="container">
                {this.mostrarResultado()}
            </div>
        );
    }
}
Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}