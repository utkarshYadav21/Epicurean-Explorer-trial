import React, { useState } from 'react';
import '../css/cart.css';

const Cart = () => {
    const [cartItems,setCartItems]=useState([]);
    const [recipes, setRecipes] = useState([
        { name: 'Tea', ingredients: ['Sugar', 'Milk', 'Chai Patti'] },
        { name: 'Egg Casseroles', ingredients: [] },
        { name: 'French Toast', ingredients: [] },
    ]);
    const getCartItems=async()=>{
        let res=await fetch("http://127.0.0.1:8000/api/v1/cart",{
            method:'get',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${localStorage.getItem("jwt")}`
            }
        });
        res=res.json();
        
    }
    const handleDelete = (recipeIndex, ingredientIndex) => {
        const newRecipes = [...recipes];
        newRecipes[recipeIndex].ingredients.splice(ingredientIndex, 1);
        setRecipes(newRecipes);
    };

    return (
        <div className="recipe-list">
            <h2 className="cart-header">Your Cart</h2>
            <ul>
                {recipes.map((recipe, recipeIndex) => (
                    <li key={recipeIndex} className="recipe-item">
                        <div>
                            <h3>{recipe.name}</h3>
                            <ul className="ingredient-list">
                                {recipe.ingredients.map((ingredient, ingredientIndex) => (
                                    <li key={ingredientIndex} className="ingredient-item" style={{ display: "flex", justifyContent:"space-between"}}>
                                        <div style={{ display: "flex", alignItems:"center"}}>
                                            <img src={`/images/${ingredient.toLowerCase()}.jpg`} alt={ingredient} />
                                            <span className="ingredient-name" style={{ fontSize: '16px', alignContent: 'left', color: 'black', fontWeight: 'lighter'}}>{ingredient}</span>
                                        </div>
                                        <button onClick={() => handleDelete(recipeIndex, ingredientIndex)}>Delete</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
