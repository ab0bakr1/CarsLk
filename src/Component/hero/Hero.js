import React from "react";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HeroImg from './../../IMG/hero1.png';
import HeroImg2 from './../../IMG/hero2.png';
import HeroImg3 from './../../IMG/hero3.png';
import "./Hero.css"

function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="hero-img" src={HeroImg} text="First slide" />
        <Carousel.Caption>
          <h3>Easy rental, enjoyable trip.</h3>
          <p>Choose your favorite car from a wide range of modern and reliable cars.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="hero-img" src={HeroImg2} text="Second slide" />
        <Carousel.Caption>
          <h3>Great cars, amazing prices.</h3>
          <p>We offer the best prices and the best services in car rental.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="hero-img" src={HeroImg3} text="Third slide" />
        <Carousel.Caption>
          <h3>Outstanding service, guaranteed satisfaction.</h3>
          <p>We offer delivery and pickup service from anywhere you want.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;