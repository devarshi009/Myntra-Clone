import React, { Component } from "react";
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";
import "./Carousal.css";

import c1 from "../Home/crausal/1.jpg"
import c2 from "../Home/crausal/2.jpg"
import c3 from "../Home/crausal/3.jpg"
import c4 from "../Home/crausal/4.jpg"
import c5 from "../Home/crausal/5.jpg"
import c6 from "../Home/crausal/6.jpg"
import c7 from "../Home/crausal/7.jpg"
import c8 from "../Home/crausal/8.jpg"
export default class Carousal extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="mainslide1">
        <Slider {...settings}>
          <div className="imgslide">
         <img style={{width:"100%"}} src={c1}alt="1"/>
          </div>
          <div className="imgslide">
         <img style={{width:"100%"}} src={c2}alt="1"/>
          </div>
          <div className="imgslide">
         <img style={{width:"100%"}} src={c3}alt="1"/>
          </div>
          <div className="imgslide">
         <img style={{width:"100%"}} src={c4}alt="1"/>
          </div>
          <div className="imgslide">
         <img style={{width:"100%"}} src={c5}alt="1"/>
          </div>
          <div className="imgslide">
         <img style={{width:"100%"}} src={c6}alt="1"/>
          </div>
          <div className="imgslide">
         <img style={{width:"100%"}} src={c7}alt="1"/>
          </div>
          <div className="imgslide">
         <img style={{width:"100%"}} src={c8}alt="1"/>
          </div>
         
         
        </Slider>
      </div>
    );
  }
}