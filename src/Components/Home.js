import React from "react";
import "./home.css";
import { Menu, Dropdown, Icon, Button, Avatar } from "antd";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Footer from './Footer'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <div className="email-sign">
        <div className="email">
          <p>SUBSCRIBE FOR UPDATES AND FREEBIES</p>
          <input type="text" value="YOUREMAIL@SOMETHING.COM" />
          <button>SUBMIT</button>
        </div>
        {/* grid middle section */}
        <div className="middle-wrapper">
          <div className='box1'>
            <h1>News</h1>
          </div>
          <div className='box2'>
            <h1>Trends</h1>
          </div>
          <div className='box3'>
            <h1>Culture</h1>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default Home;
