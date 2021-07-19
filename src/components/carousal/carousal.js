import React from "react";
import "./carousal.css";
import Carousel from "react-bootstrap/Carousel";
import Carouselpic from "../images/carousel-1.jpg";
import Carouselpic1 from "../images/carousel-2.jpg";
import Carouselpic2 from "../images/carousel-3.jpg";

const Slider = () => {
  return (
    <div className="carouselwrapper">
      <div className="carousel-displayinfo">
        <h2>Fastest Growing platform online for traders</h2>
      </div>
      <Carousel>
        <Carousel.Item className="carousel">
          <img className="d-block w-100" src={Carouselpic} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img
            className="d-block w-100"
            src={Carouselpic1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="carousel">
          <img className="d-block w-100" src={Carouselpic2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
