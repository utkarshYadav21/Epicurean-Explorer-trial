import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import "../css/SubRegion.css"
import Loader from "./Loader";

const SubRegion = () => {
  const apiUrl = "3leNqlRrbeJc26ppKLFkb4GwUUzdUrgZ8Ds-cU2MGEL_DZE4";
  const [recipes, setRecipes] = useState([]);
  const { subRegion } = useParams();
  console.log(subRegion);
  useEffect(() => {
    recipeBySubRegion();
  }, []);
  const recipeBySubRegion = async () => {
    let res = await fetch(
      `https://apis-new.foodoscope.com/recipe-search/sub-regions?searchText=${subRegion}&pageSize=10`,
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
      <h1 style={{marginLeft :"5%"}}><u>{`Let's Choose a ${subRegion} Recipe to Make`}</u></h1>
      <div className="parentContainer-subregion">
      {recipes.map((recipe, index) => {
        return (
          <RecipeCard className = "card-subregion"
            title={recipe.Recipe_title}
            key={index}
            image={recipe.img_url}
          />
        );
      })}
      </div>
      {/* ):<Loader /> */}
    </div>
  );
};

export default SubRegion;
