import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="link">
        <NavLink to="/profile"> Profile</NavLink>
      </div>
      <div className="link">
        <NavLink to="dialogs"> Messages</NavLink>
      </div>
      <div className="link">
        <NavLink to="news">News</NavLink>
      </div>
      <div className="link">
        <NavLink to="music">Music</NavLink>
      </div>
      <div className="link">
        <NavLink to="settings">Settings</NavLink>
      </div>
    </nav>
  );
};

export { Navbar };
