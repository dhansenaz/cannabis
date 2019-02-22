import React from "react";
import "./nav.css";
import Logo from "./marijuana.png";
import { Menu, Dropdown, Icon, Button, Avatar } from "antd";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={Logo} alt="logo" style={{ width: "50px" }} />
        </div>
        <ul className="deskNav">
          <li>
            <Icon className="navIcon" type="laptop" />
            <Link to="/">Home</Link>
          </li>
          <li>
            <Icon className="navIcon" type="team" />
            <Link to="/about">About</Link>
          </li>
          <li>
            <Icon className="navIcon" type="environment" />
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Icon className="navIcon" type="shopping-cart" />
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Icon className="navIcon" type="bulb" />
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
