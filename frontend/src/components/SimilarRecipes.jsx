import React,{useState} from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const SimilarRecipes = () => {
  const apiUrl = "3leNqlRrbeJc26ppKLFkb4GwUUzdUrgZ8Ds-cU2MGEL_DZE4";
  const [recipes, setRecipes] = useState([]);
  const {id}=useParams();
  console.log(id)
  const getSimilarRecipes = async () => {
    let res = await fetch(
      "http://127.0.0.1:8000/api/v1/similarrecipe",
      {
        method: "post",
        body:JSON.stringify({recipeid:id}),
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
    res = await res.json();
    setRecipes(res.data.similarrecipes);
    console.log(res);
  };
  getSimilarRecipes()
  return (
    <div>
      <h1>Here are the dishes Similar to the previous dish...</h1>
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

export default SimilarRecipes;
