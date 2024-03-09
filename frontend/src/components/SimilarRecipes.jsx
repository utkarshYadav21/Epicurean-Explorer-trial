import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import "../css/SimilarRecipe.css"

const SimilarRecipes = () => {
  const apiUrl = "3leNqlRrbeJc26ppKLFkb4GwUUzdUrgZ8Ds-cU2MGEL_DZE4";
  const [recipes, setRecipes] = useState([]);
  const {id}=useParams();
  console.log(id)
  useEffect(() => {
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
        if (data.success) {
          setRecipes(data.data.similarrecipes);
        } else {
          console.error("Failed to fetch similar recipes");
        }
      } catch (error) {
        console.error("Error fetching similar recipes:", error);
      }
    };

    getSimilarRecipes();
  }, []);
  return (
    <div>
      <h1 style={{marginLeft :"5%"}}>Here are the dishes Similar to the previous dish...</h1>
      <div className="simrec-container">
      {recipes.map((recipe, index) => {
        return (
          <RecipeCard className = "simrec-reccard"
            title={recipe.Recipe_title}
            key={index}
            image={recipe.img_url}
          />
        );
      })}
      </div>
    </div>
  );
};

export default SimilarRecipes;
