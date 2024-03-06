import React from "react";
import RecipeCard from "./RecipeCard";
import "../css/recipeCardList.css";

const RecipeCardList = () => {
  return (
      <div class="card__container">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
  );
};

export default RecipeCardList;
