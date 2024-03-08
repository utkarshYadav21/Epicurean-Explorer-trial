import React from "react";
import "../css/recipeProfile.css";
const RecipeProfile = () => {
  return (
    <div>
      <div className="recipe-profile-container">
        <div className="recipe-profile-name">
          <h1 style={{ fontSize: "88px" }}>thaifish</h1>
          <div className="recipe-profile-btn-div">
            <button className="recipe-profile-btn capitalize-first-letter">
              Similar Recipes
            </button>
            <button className="recipe-profile-btn capitalize-first-letter">
              Start Making
            </button>
          </div>
        </div>
        <div className="recipe-profile-image-div">
          <img
            src="../../../images/WhatsApp Image 2024-03-07 at 00.25.13.jpeg"
            className="recipe-profile-image"
          />
        </div>
      </div>
      <div className="nutrients-div">
        <div className="nutrient-div">
          <h3>
            Energy
            <br />
            67
          </h3>
        </div>
        <div className="nutrient-div">
        <h3>
            Carbs
            <br />
            67
          </h3>
        </div>
        <div className="nutrient-div">
        <h3>
            Calorie
            <br />
            67
          </h3>
        </div>
        <div className="nutrient-div">
        <h3>
            Protein
            <br />
            67
          </h3>
        </div>
        <div className="nutrient-div">
        <h3>
            Fat
            <br />
            67
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RecipeProfile;