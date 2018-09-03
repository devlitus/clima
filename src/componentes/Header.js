import React from "react";
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <nav className="nav-wrapper light-blue darken-2">
      <a className="brand-logo">{props.titulo}</a>
    </nav>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}
export default Header;
