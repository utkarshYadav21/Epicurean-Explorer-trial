import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import RecipeCard from "./RecipeCard";

const RecipeByRegion = () => {
  const apiUrl = "3leNqlRrbeJc26ppKLFkb4GwUUzdUrgZ8Ds-cU2MGEL_DZE4";
  const [recipes, setRecipes] = useState([]);
  const { Region } = useParams();
  console.log(Region);
  useEffect(() => {
    recipeByRegion();
  }, []);
  const recipeByRegion = async () => {
    let res = await fetch(
      `https://apis-new.foodoscope.com/recipe-search/sub-regions?searchText=${Region}&pageSize=10`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiUrl}`,
        },
      }
    );
    res = await res.json();
    setRecipes(res.payload.data);
    console.log(recipes);
  };
  return (
    <div>
      {/* recipes?( */}
      <h1>Here are the dishes for the searched region...</h1>
      {recipes.map((recipe, index) => {
        return (
          <RecipeCard
            title={recipe.Recipe_title}
            key={index}
            image={recipe.img_url}
          />
        );
      })}
      {/* ):
      <Loader /> */}
    </div>
  );
};

export default RecipeByRegion;
