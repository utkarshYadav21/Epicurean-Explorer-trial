import React from "react";
import "../css/recipeCard.css";
import {Link} from "react-router-dom"

const RecipeCard = ({title,image,id}) => {
  return (
        <article class="card__article">
          <img src={image} alt="image" class="card__img" />
          <div class="card__data">
            <h2 class="card__title">{title}</h2>
            <Link to={`/recipe/${id}`}><a  class="card__button">
              Read More
            </a></Link>
          </div>
        </article>
  );
};

export default RecipeCard;
