/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.scss';

const Home = () => {
  return (
    <div id="Home">
      <div className="corouselWrapper">
        <Carousel autoPlay interval={3000}>
          <div>
            <img src="https://wallpaperaccess.com/full/151827.jpg" />
          </div>
          <div>
            <img src="https://wallpaperaccess.com/full/735833.jpg" />
          </div>
          <div>
            <img src="https://kcd.org.uk/wordpress/wp-content/uploads/2020/04/WEBSITE-Risen-Ascended-Glorified-1200x400.jpg" />
          </div>
          <div>
            <img src="https://wallpaperaccess.com/full/1119361.jpg" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
