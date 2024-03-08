import React, { useState } from 'react';
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
    const [products, setProducts] = useState([
      { id: 1, name: 'Shara Precision Elegance Timepiece', price: 40, image: '../../../images/location.png' },
      { id: 2, name: 'Midnight Elegance by Noir Couture', price: 95, image: 'dress.jpg' },
    ]);

 const handleAddToCart = (product) => {
   // Add to cart logic
   console.log(`Added ${product.name} to cart`);
 };

 return (
    <FavoritesContainer>
      <Title>Favourites</Title>
      <Description>Your chosen collection is here to make you smile—it's like it was made just for you!</Description>
      <ProductsContainer>
        {products.map((product) => (
          <Product key={product.id}>
            {/* Replace the image with the RecipeCard component */}
            <RecipeCard />
            <ProductName>{product.name}</ProductName>
          </Product>
        ))}
      </ProductsContainer>
    </FavoritesContainer>
  );
 };

export default Favorites;