import React from "react";

const Header = (props) => {
  return (
    <nav className="nav-wrapper light-blue darken-2">
      <a className="brand-logo">{props.titulo}</a>
    </nav>
  );
};

export default Header;
