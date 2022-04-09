import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import mobile from "../Responsive";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 1rem;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "10px" })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  text-align: center;
  cursor: pointer;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ justifyContent: "center", flex: "1.7" })}
`;

const MenuItem = styled.div`
  font-style: 1rem;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ marginLeft: "10px", fontSize: "12px" })}
`;

const Navbar = () => {
  const history = useHistory();
const logoHandler = () => {
  history.push("/");
};
  const registerHandler = () => {
    history.push("/register");
  };
  const loginHandler = () => {
    history.push("/login");
  };
  const cartHandler = () => {
    history.push("/cart");
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> EN </Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={logoHandler}> H M N </Logo>
        </Center>
        <Right>
          <MenuItem onClick={registerHandler}>REGISTER</MenuItem>
          <MenuItem onClick={loginHandler}>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined onClick={cartHandler} />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
