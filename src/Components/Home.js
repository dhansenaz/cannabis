import React from "react";
import "./home.css";
import { Menu, Dropdown, Icon, Button, Avatar } from "antd";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Footer from "./Footer";
import Email from "./Email";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Email />
      {/* grid middle section */}
      <div className="middle-wrapper">
        <Link to="/news">
          <div className="box1">
            <h1>News</h1>
          </div>
        </Link>
        <Link to="/trends">
          <div className="box2">
            <h1>Trends</h1>
          </div>
        </Link>
        <Link to="/culture">
          <div className="box3">
            <h1>Culture</h1>
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
