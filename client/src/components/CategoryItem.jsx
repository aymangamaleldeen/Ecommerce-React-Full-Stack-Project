import React from 'react'
import styled from "styled-components";
import mobile from "../Responsive";
import { Link } from "react-router-dom";



const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
background-position: center;
  &:hover {
    transform: scale(1.06);
    transition: 0.3s ease;
  }
`;
const Image = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit:cover;

  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;
const Title = styled.h2`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
border:none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 700;
`;


const CategoryItem = (props) => {
 
  return (
    <Container>
      <Link to={`/products/${props.item.cat}`}>
        <Image src={props.item.img} />
        <Info>
          <Title> {props.item.title}</Title>
          <Button > SHOP NOW </Button>
        </Info>
      </Link>
    </Container>
  );
}

export default CategoryItem