import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";
import mobile from "../Responsive";
import { useParams } from "react-router-dom";
import { useState } from "react";
// import { useForm } from "react-hook-form";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.form`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px ", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const params = useParams();
  const cat = params.category;
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("Newest");

  //   const filterHandler = (event) => {
  //     setFilter((prevState) => {
  //       const value = event.target.value;
  // setFilter({...prevState , [event.target.name]:value})
  //     });
  //   };

  const colorHandler = (event) => {
    setFilter((prevState) => {
      return { ...prevState, color: event.target.value };
    });
  };
  const sizeHandler = (event) => {
    setFilter((prevState) => {
      return { ...prevState, size: event.target.value };
    });
  };

  const sortHandler = (event) => {
    setSort(event.target.value);
  };
  console.log(filters);
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{cat.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={colorHandler}>
            <Option disabled selected>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>beige</Option>
            <Option>gray</Option>
          </Select>
          <Select onChange={sizeHandler}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={sortHandler}>
            <Option value="Newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
