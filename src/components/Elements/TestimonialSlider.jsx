import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (  
        <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Working with ERP TECH has been a game-changer for our business. Their team went above and beyond to understand our requirements and delivered a solution that exceeded our expectations. The support we received was outstanding, and we look forward to collaborating on future projects."
            author="— Sarah J., CEO of TechSolutions"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Working with ERP TECH has been a game-changer for our business. Their team went above and beyond to understand our requirements and delivered a solution that exceeded our expectations. The support we received was outstanding, and we look forward to collaborating on future projects."
            author="— Sarah J., CEO of TechSolutions"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Working with ERP TECH has been a game-changer for our business. Their team went above and beyond to understand our requirements and delivered a solution that exceeded our expectations. The support we received was outstanding, and we look forward to collaborating on future projects."
            author="— Sarah J., CEO of TechSolutions"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Working with ERP TECH has been a game-changer for our business. Their team went above and beyond to understand our requirements and delivered a solution that exceeded our expectations. The support we received was outstanding, and we look forward to collaborating on future projects."
            author="— Sarah J., CEO of TechSolutions"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Working with ERP TECH has been a game-changer for our business. Their team went above and beyond to understand our requirements and delivered a solution that exceeded our expectations. The support we received was outstanding, and we look forward to collaborating on future projects."
            author="— Sarah J., CEO of TechSolutions"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
