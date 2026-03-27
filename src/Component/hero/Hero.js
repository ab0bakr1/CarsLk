import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import HeroImg from './../../IMG/hero1.png';
import HeroImg2 from './../../IMG/hero2.png';
import HeroImg3 from './../../IMG/hero3.png';
import "./Hero.css"

function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      img: HeroImg,
      title: "Easy Rental, Enjoyable Trip",
      desc: "Choose your favorite car from a wide range of modern and reliable cars.",
      btnText: "View Collection"
    },
    {
      img: HeroImg2,
      title: "Great Cars, Amazing Prices",
      desc: "We offer the best prices and the best services in car rental.",
      btnText: "Check Prices"
    },
    {
      img: HeroImg3,
      title: "Outstanding Service, Guaranteed",
      desc: "We offer delivery and pickup service from anywhere you want.",
      btnText: "Contact Us"
    }
  ];

  return (
    <section className="hero-section">
      <Carousel activeIndex={index} onSelect={handleSelect} fade interval={5000} controls={true}>
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <div className="hero-slide-content">
              {/* صورة الخلفية المعالجة */}
              <div className="hero-overlay"></div>
              <img className="hero-img-main" src={slide.img} alt={slide.title} />
              
              <Carousel.Caption className="custom-caption">
                <h1 className="display-3 fw-bold animate__animated animate__fadeInUp">
                  {slide.title}
                </h1>
                <p className="lead animate__animated animate__fadeInUp animate__delay-1s">
                  {slide.desc}
                </p>
                <div className="hero-btns mt-4 animate__animated animate__fadeInUp animate__delay-2s">
                  <Button variant="primary" size="lg" className="me-3 px-5 py-3 shadow">
                    {slide.btnText}
                  </Button>
                  <Button variant="outline-light" size="lg" className="px-5 py-3">
                    Learn More
                  </Button>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default Hero;