import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import mobile from "../Responsive";
// import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e9e7e7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.index * -100}vw);
  transition: 1s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const clickLeftHandler = () => {
    setSlideIndex((prev) => (prev > 0 ? prev - 1 : 2));
  };

  const clickRightHandler = () => {
    setSlideIndex((prev) => (prev < 2 ? prev + 1 : 0));
  };


  return (
    <Container>
      <Arrow direction="left" onClick={clickLeftHandler}>
        <ArrowLeft />
      </Arrow>
      <Wrapper index={slideIndex}>
        {sliderItems.map((obj) => (
          <Slide bg={obj.bg} key={obj.id}>
            <ImageContainer>
              <Image src={obj.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{obj.title}</Title>
              <Desc>{obj.desc}</Desc>
                <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={clickRightHandler}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
