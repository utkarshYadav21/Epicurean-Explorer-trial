import React, { useEffect, useState} from "react";
import "../css/recipeProfile.css";
import { useNavigate, useParams } from "react-router-dom";

const RecipeProfile = () => {
  const navigate=useNavigate('')
  const [RecipeTitle, setRecipeTitle] = useState("");
  const [RecipeImage, setRecipeImage] = useState("");
  const [calories, setCalories] = useState("");
  const [energy, setEnergy] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [carbs, setCarbs] = useState("");

  const { id } = useParams();
  const apiUrl = "R8OO00YzjtyAMfp-O1lpcxhdPuubeMD_pM92fOE8t7on5uln";
  useEffect(() => {
    getRecipe();
  },[]);
  const getRecipe = async () => {
    let recipe = await fetch(`https://apis-new.foodoscope.com/recipe/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiUrl}`,
      },
    });
    recipe = await recipe.json();
    if (recipe.success === "true") {
      setRecipeTitle(recipe.payload.Recipe_title);
      setRecipeImage(recipe.payload.img_url);
      setCalories(recipe.payload.Calories);
      setEnergy(recipe.payload["Energy (kcal)"]);
      setProtein(recipe.payload["Protein (g)"]);
      setFat(recipe.payload["Total lipid (fat) (g)"]);
      setCarbs(recipe.payload["Carbohydrate, by difference (g)"]);
    } else {
      alert("no recipe of the day found");
    }
  };
  const handleClick=()=>{
    navigate(`/recipeIns/${id}`);
  }
  return (
    <div>
      <div className="recipe-profile-container">
        <div className="recipe-profile-name">
          <h1 style={{ fontSize: "88px" }}>{RecipeTitle}</h1>
          <div className="recipe-profile-btn-div">
            <button className="recipe-profile-btn capitalize-first-letter">
              Similar Recipes
            </button>
            <button onClick={handleClick} className="recipe-profile-btn capitalize-first-letter">
              Start Making
            </button>
          </div>
        </div>
        <div className="recipe-profile-image-div">
          <img
            src={RecipeImage}
            className="recipe-profile-image"
          />
        </div>
      </div>
      <div className="nutrients-div">
        <div className="nutrient-div" style={{margin:"0px 10px"}}>
          <h3>
            Energy
            <br />
            {energy}
          </h3>
        </div>
        <div className="nutrient-div" style={{margin:"0px 10px"}}>
          <h3>
            Carbs
            <br />
            {carbs}
          </h3>
        </div>
        <div className="nutrient-div" style={{margin:"0px 10px"}}>
          <h3>
            Calories
            <br />
            {calories}
          </h3>
        </div>
        <div className="nutrient-div" style={{margin:"0px 10px"}}>
          <h3>
            Protein
            <br />
            {protein}
          </h3>
        </div>
        <div className="nutrient-div" style={{margin:"0px 10px"}}>
          <h3>
            Fat
            <br />
            {fat}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RecipeProfile;
