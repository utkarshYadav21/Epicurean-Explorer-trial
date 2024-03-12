import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import RecipeCard from "./RecipeCard";
import "../css/SubRegion.css"
import apiUrl from "../config";

const RecipeByRegion = () => {
  
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
    console.log(res);
    setRecipes(res.payload.data);
    console.log(recipes);
  };
  return (
    <div>
      {/* recipes?( */}
      <h1 style={{marginLeft:"5%"}}>{`Explore the spice of ${Region} Continent`}</h1>
      <div className="parentContainer-subregion">
      {recipes.map((recipe, index) => {
        return (
          <RecipeCard className="card-subregion"
            title={recipe.Recipe_title}
            key={index}
            image={recipe.img_url}
            id={recipe.Recipe_id}
          />
        );
      })}
      </div>
      {/* ):
      <Loader /> */}
    </div>
  );
};

export default RecipeByRegion;
