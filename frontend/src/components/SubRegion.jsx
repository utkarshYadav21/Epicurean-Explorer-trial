import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const SubRegion = () => {
  const apiUrl = "R8OO00YzjtyAMfp-O1lpcxhdPuubeMD_pM92fOE8t7on5uln";
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
      <h1>Here are the dshes for the searched region...</h1>
      {recipes.map((recipe, index) => {
        return (
          <RecipeCard
            title={recipe.Recipe_title}
            key={index}
            image={recipe.img_url}
          />
        );
      })}
    </div>
  );
};

export default SubRegion;
