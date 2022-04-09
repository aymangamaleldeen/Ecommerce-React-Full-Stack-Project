import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
// import axios from "axios"


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProductHandler = async() => {
      try {
        const res = await fetch(
          cat? `http://localhost:5000/api/products?category=${cat}`
            : `http://localhost:5000/api/products`
        );

        const data = await res.json();
        setProducts(data);
      } catch (err) {}
    };
    fetchProductHandler();
  }, [cat]);

  
  useEffect(() => {
  cat && setFilteredProducts(
          products.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        )


  }, [products, cat, filters]);

useEffect(()=>{
if(sort === "Newest"){
  setFilteredProducts(prevState=> {
return prevState.sort((a,b) => 
a.createdAt - b.createdAt
)
 } )
}

if (sort === "asc") {
  setFilteredProducts((prevState) => {
    return prevState.sort((a, b) => a.price - b.price);
  });
}


if (sort === "desc") {
  setFilteredProducts((prevState) => {
    return prevState.sort((a, b) => b.price - a.price);
  });
}
},[sort])

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products.slice(0,8).map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
