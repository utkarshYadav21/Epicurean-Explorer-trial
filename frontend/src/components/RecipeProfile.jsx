import React, { useEffect, useState } from "react";
import "../css/recipeProfile.css";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";
import apiUrl from "../config";

const RecipeProfile = () => {
  const navigate = useNavigate("");
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState("");
  const [RecipeTitle, setRecipeTitle] = useState("");
  const [RecipeImage, setRecipeImage] = useState("");
  const [calories, setCalories] = useState("");
  const [energy, setEnergy] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [carbs, setCarbs] = useState("");

  const { id } = useParams();
  
  useEffect(() => {
    getRecipe();
  }, []);
  const getRecipe = async () => {
    console.log(id);
    let res = await fetch(`https://apis-new.foodoscope.com/recipe/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiUrl}`,
      },
    });
    res = await res.json();
    console.log(res);
    setRecipe(res.payload);
    // console.log(res.payload.calories)
    // console.log(res.payload.img_url)
    // console.log(res.payload.Recipe_title)
    // console.log(res.payload["Energy (kcal)"])
    // console.log(res.payload["Protein (g)"])
    // console.log(res.payload["Total lipid (fat) (g)"])
    // console.log(res.payload["Carbohydrate, by difference (g)"])
    if (res.success === "true") {
      setRecipeTitle(res.payload.Recipe_title);
      setRecipeImage(res.payload.img_url);
      setCalories(res.payload.Calories);
      setEnergy(res.payload["Energy (kcal)"]);
      setProtein(res.payload["Protein (g)"]);
      setFat(res.payload["Total lipid (fat) (g)"]);
      setCarbs(res.payload["Carbohydrate, by difference (g)"]);
    } else {
      alert("no recipe found");
    }
  };
  const handleClick = () => {
    navigate(`/recipeIns/${id}`);
  };
  const handleSimilarClick = () => {
    navigate(`/similar/${id}`);
  };
  return (
    <div>
      {recipe ? (
        <>
          <div className="recipe-profile-container">
            <div className="recipe-profile-name">
              <h1 style={{ fontSize: "70px" }}>{RecipeTitle}</h1>
              <div className="recipe-profile-btn-div">
                <button
                  onClick={handleSimilarClick}
                  className="recipe-profile-btn capitalize-first-letter"
                >
                  Similar Recipes
                </button>
                <button
                  onClick={handleClick}
                  className="recipe-profile-btn capitalize-first-letter"
                >
                  Start Making
                </button>
              </div>
            </div>
            <div className="recipe-profile-image-div">
              <img src={RecipeImage} className="recipe-profile-image" />
            </div>
          </div>
          <div className="nutrients-div">
            <div className="nutrient-div" style={{ margin: "0px 10px" }}>
              <h3>
                Energy
                <br />
                {energy}
              </h3>
            </div>
            <div className="nutrient-div" style={{ margin: "0px 10px" }}>
              <h3>
                Carbs
                <br />
                {carbs}
              </h3>
            </div>
            <div className="nutrient-div" style={{ margin: "0px 10px" }}>
              <h3>
                Calories
                <br />
                {calories}
              </h3>
            </div>
            <div className="nutrient-div" style={{ margin: "0px 10px" }}>
              <h3>
                Protein
                <br />
                {protein}
              </h3>
            </div>
            <div className="nutrient-div" style={{ margin: "0px 10px" }}>
              <h3>
                Fat
                <br />
                {fat}
              </h3>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default RecipeProfile;
