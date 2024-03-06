import React from "react";
import "../css/recipeCard.css";

const RecipeCard = () => {
  return (
        <article class="card__article">
          <img src="../../../images/landscape-1.png" alt="image" class="card__img" />

          <div class="card__data">
            <span class="card__description">Vancouver Mountains, Canada</span>
            <h2 class="card__title">The Great Path</h2>
            <a href="#" class="card__button">
              Read More
            </a>
          </div>
        </article>
  );
};

export default RecipeCard;
