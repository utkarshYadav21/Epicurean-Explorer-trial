import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RecipeCard from './RecipeCard'; 

const FavoritesContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-family: Arial, sans-serif;
`;

const Title = styled.h1`
 margin-bottom: 20px;
`;

const Description = styled.p`
 margin-bottom: 30px;
 text-align: center;
`;

const ProductsContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
`;

const Product = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 margin: 20px;
`;


const ProductName = styled.p`
 margin-top: 10px;
 font-weight: bold;
`;


const Favorites = () => {
    const [fav,setFav]=useState([]);
    const [description,setDescription]=useState("")
    useEffect(()=>{
      getFavCards();
    })
    const getFavCards=async()=>{
      let res=await fetch("http://127.0.0.1:8000/api/v1/fav",{
        method:'get',
        headers:{
          'Content-Type':'application/json',
          "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
        }
      });
      res=await res.json();
      console.log(res);
      setFav(res.recipeDetails)
    }
 const handleAddToCart = (product) => {
   // Add to cart logic
   console.log(`Added ${product.name} to cart`);
 };

 return (
    <FavoritesContainer>
      <Title>Favourites</Title>
      <Description>Your chosen collection is here to make you smile—it's like it was made just for you!</Description>
      <ProductsContainer>
        {fav.map((favourite) => (
          <Product key={favourite.id}>
            <RecipeCard title={favourite.Recipe_title} image={favourite.img_url} />
          </Product>
        ))}
      </ProductsContainer>
    </FavoritesContainer>
  );
 };

export default Favorites;