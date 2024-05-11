import "./Hero.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import audi from "../Gallery/audi.png";
import mercedes from "../Gallery/mercedes.png";
import ford from "../Gallery/ford.png";
import bmw from "../Gallery/bmw.png";
import fiat from "../Gallery/fiat.png";
import volvo from "../Gallery/volvo.png";

const Hero = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
  };
  return (
    <div className="sliderPage">
      <Slider {...settings}>
        <div className="heroSlider">
          <div className="sliderContent">
            <div className="textSlider">
              <h1>cheap, high quality, reliable</h1>
              <h2>
                The vehicle of your dreams <br />
                <strong>RENT</strong>
              </h2>
            </div>
            <div className="sliderImg">
              <img src={audi} alt="" />
            </div>
          </div>
        </div>

        <div>
          <div className="heroSlider">
            <div className="sliderContent">
              <div className="textSlider">
                <h1>cheap, high quality, reliable</h1>
                <h2>
                  The vehicle of your dreams <br />
                  <strong>RENT</strong>
                </h2>
              </div>
              <div className="sliderImg">
                <img src={mercedes} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="heroSlider">
            <div className="sliderContent">
              <div className="textSlider">
                <h1>cheap, high quality, reliable</h1>
                <h2>
                  The vehicle of your dreams <br />
                  <strong>RENT</strong>
                </h2>
              </div>
              <div className="sliderImg">
                <img src={ford} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="heroSlider">
            <div className="sliderContent">
              <div className="textSlider">
                <h1>cheap, high quality, reliable</h1>
                <h2>
                  The vehicle of your dreams <br />
                  <strong>RENT</strong>
                </h2>
              </div>
              <div className="sliderImg">
                <img src={bmw} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="heroSlider">
            <div className="sliderContent">
              <div className="textSlider">
                <h1>cheap, high quality, reliable</h1>
                <h2>
                  The vehicle of your dreams <br />
                  <strong>RENT</strong>
                </h2>
              </div>
              <div className="sliderImg">
                <img src={fiat} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="heroSlider">
            <div className="sliderContent">
              <div className="textSlider">
                <h1>cheap, high quality, reliable</h1>
                <h2>
                  The vehicle of your dreams <br />
                  <strong>RENT</strong>
                </h2>
              </div>
              <div className="sliderImg">
                <img src={volvo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
