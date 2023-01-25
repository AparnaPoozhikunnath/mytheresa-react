import React from "react";
import "./styles/Header.scss";

const Header = (props) => {
  return (
      <header className="header-container">{props.title}</header>
  );
};

export default Header;