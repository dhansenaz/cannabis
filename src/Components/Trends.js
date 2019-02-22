import React from "react";
import "./trends.css";
import { Carousel } from "antd";
import Footer from "./Footer";

const Trends = () => {
  return (
    <div className="trends-wrapper">
      <div className="image-slider">
        <Carousel autoplay>
          <div className="image-1">
            <h3>Live</h3>
          </div>
          <div className="image-2">
            <h3>Laugh</h3>
          </div>
          <div className="image-3">
            <h3>Love</h3>
          </div>
          <div className="image-4">
            <h3>Repeat</h3>
          </div>
        </Carousel>
      </div>
      <div className="box-b-wrapper">
        <div className="box-b-image" />
        <div className="box-b-content">
          <p>
            Whether you’re lounging on the beach or just kicking it in the
            backyard, you may want to consider adding cannabinoids into your sun
            protection routine.
            <u>Topical CBD products</u> have a ton of great benefits.
            Cannabis-based lotions, salves, oils, and even lip balms can keep
            your skin healthy no matter how high the outdoor temperatures get.{" "}
          </p>
          <div className="box-c-logo" />
        </div>
      </div>
      <div className="box-c-wrapper">
        <div className="box-c-image" />
        <div className="box-c-content">
          <div className="box-b-image" />

          <p>
            Whether you’re lounging on the beach or just kicking it in the
            backyard, you may want to consider adding cannabinoids into your sun
            protection routine.
          </p>
        </div>
      </div>
      <div className="box-d-wrapper">
        <div className="box-d-content">
          <strong>
            <p> Trending Products</p>
          </strong>
        </div>
        <iframe
          width="350"
          height="215"
          src="https://www.youtube.com/embed/fRlVnVbzRuk"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Trends;
