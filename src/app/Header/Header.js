import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.less";

export const Header = ({ navList }) => {
  return (
    <header className="header">
      <nav>
        {navList.map((nav) => (
          <Link key={nav.path} to={nav.path}>
            {nav.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
