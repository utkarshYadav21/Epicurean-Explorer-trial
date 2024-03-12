import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import "../css/SimilarRecipe.css";
import Loader from "./Loader";
import apiUrl from "../config";

const SimilarRecipes = () => {
  
  const [recipes, setRecipes] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getSimilarRecipes();
  }, []);
  const getSimilarRecipes = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/similarrecipe", {
        method: "POST",
        body: JSON.stringify({ recipeid: id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      if (data.status === "success") {
        setRecipes(data.data.similarrecipes);
      } else {
        console.error("Failed to fetch similar recipes");
      }
    } catch (error) {
      console.error("Error fetching similar recipes:", error);
    }
  };
  return (
    <div style={{ height: "100vh" }}>
      <h1 style={{ marginLeft: "5%" }}>
        Here are the dishes Similar to the previous dish...
      </h1>
      {recipes.length>0 ? (
        <div className="simrec-container">
          {recipes.map((recipe, index) => {
            return (
              <RecipeCard
                className="simrec-reccard"
                title={recipe.recipe_title}
                key={index}
                image={recipe.img_url}
              />
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SimilarRecipes;
