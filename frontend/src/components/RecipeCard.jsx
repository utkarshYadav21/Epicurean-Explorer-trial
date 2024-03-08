import React from "react";
import "../css/recipeCard.css";

const RecipeCard = ({title,image}) => {
  return (
        <article class="card__article">
          <img src={image} alt="image" class="card__img" />

          <div class="card__data">
            <h2 class="card__title">{title}</h2>
            <a href="#" class="card__button">
              Read More
            </a>
          </div>
        </article>
  );
};

export default RecipeCard;
