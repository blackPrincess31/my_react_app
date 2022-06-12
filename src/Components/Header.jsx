import React from "react";
import "../App.css";

const Header = () => {
  return (
    <header className="header">
      <img
        src="http://s1.iconbird.com/ico/2013/8/428/w128h1281377930298catwalk2.png"
        alt="kotik"
      ></img>
      <span className="headertext"> Social network for kittens </span>
    </header>
  );
};

export { Header };
