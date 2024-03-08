import React, { useEffect, useState } from "react";
import "../css/Home.css";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { TbCameraShare } from "react-icons/tb";
import { IoCloseCircleOutline } from "react-icons/io5";
import RecipeName from "./RecipeName";

const Home = () => {
  const navigate = useNavigate("");
  const apiUrl = "R8OO00YzjtyAMfp-O1lpcxhdPuubeMD_pM92fOE8t7on5uln";
  const [searchRecipe, setSearchRecipe] = useState("");
  const [description, setDescription] = useState("");
  const [dayRecipe, setDayRecipe] = useState("");
  const [dayRecipeTitle, setDayRecipeTitle] = useState("");
  const [dayRecipeImage, setDayRecipeImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    getTopRecipes();
  }, []);
  const handleSearchRecipe = async () => {
    if (searchRecipe && selectedImage) {
      alert("Please select only one search.");
    } else if (searchRecipe) {
      let recipe = await fetch(
        `https://apis-new.foodoscope.com/recipe-search/recipe?searchText=${searchRecipe}&page=0&pageSize=1`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiUrl}`,
          },
        }
      );
      recipe = await recipe.json();
      console.log(recipe);
      console.log(recipe.payload.data[0].Recipe_id);
      navigate(`/recipe/${recipe.payload.data[0].Recipe_id}`);
    } else if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);
      let response = await fetch("http://127.0.0.1:8000/api/v1/dlmodel", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        response = await response.json();
        let recipeName = response.data.label;
        console.log(recipeName);
      } else {
        alert("Failed to upload image.");
      }
    } else {
      alert("Please search atleast one thing.");
    }
  };

  const getTopRecipes = async () => {
    let recipe = await fetch(
      "https://apis-new.foodoscope.com/recipe/recipeOftheDay",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiUrl}`,
        },
      }
    );
    recipe = await recipe.json();
    console.log(recipe);
    setDayRecipe(recipe);
    if (recipe.success === "true") {
      setDayRecipeTitle(recipe.payload.Recipe_title);
      setDayRecipeImage(recipe.payload.img_url);
      getDescription();
    } else {
      alert("no recipe of the day found");
    }
  };

  const handleFavourite = async () => {
    let dayRecipeId = dayRecipe.payload.Recipe_id;
    let favouriteRes = await fetch("http://127.0.0.1:8000/api/v1/fav", {
      method: "post",
      body: JSON.stringify({ recipeid: dayRecipeId }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    favouriteRes = await favouriteRes.json();
    console.log(favouriteRes);
  };
  const getDescription = async () => {
    console.log(dayRecipeTitle);
    let des = await fetch("http://127.0.0.1:8000/api/v1/llmmodel/description", {
      method: "post",
      body: JSON.stringify({ recipename: dayRecipeTitle }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    des = await des.json();
    console.log(des)
    console.log(des.description);
    setDescription(des.description);
  };


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  const handleImageRemove = () => {
    setSelectedImage(null);
  };
  return (
    <div>
      <div className="page-container">
        <div className="intro-container">
          <h1 className="intro">
            Search among <span className="quantity">1500</span> recipes
          </h1>
          <p className="intro-des">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen b
          </p>
          <div className="searching">
            <div className="search-div">
              <input
                type="text"
                placeholder="What are you looking for..."
                className="search-field"
                value={searchRecipe}
                onChange={(e) => setSearchRecipe(e.target.value)}
              />
              <FaSearch
                className="search-icon"
                style={{
                  fontSize: "28px",
                  marginLeft: "12px",
                  cursor: "pointer",
                }}
                onClick={handleSearchRecipe}
              />
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
              <label htmlFor="image-upload" className="camera-icon-label">
                <TbCameraShare
                  className="camera-icon"
                  style={{
                    fontSize: "28px",
                    marginLeft: "13px",
                    cursor: "pointer",
                  }}
                />
              </label>
            </div>
            {selectedImage && (
              <div className="selected-image-div">
                <div style={{ display: "flex" }}>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Uploaded"
                    className="uploaded-image"
                  />
                  <IoCloseCircleOutline
                    onClick={handleImageRemove}
                    style={{
                      fontSize: "28px",
                      marginLeft: "13px",
                      cursor: "pointer",
                      marginTop: "5px",
                      color: "red",
                    }}
                  />
                </div>
                <p className="selected-image-name">{selectedImage.name}</p>
              </div>
            )}
          </div>
          <div className="adopt-div">
            <div>
              <h3 className="adopt-head">Welcome to Pet Palace</h3>
              <p className="adopt-content">
                Glad that you care for animals. We make sure you will not repent
                your decision of adopting a pet. Embrace joy and companionship
                by adopting a pet today. Provide a loving home and make a
                lasting impact on a furry friend's life.
              </p>
              <button className="adopt-btn">
                <Link to="/adopt">Adopt</Link>
              </button>
            </div>
          </div>
          <div className="giveaway-div">
            <div>
              <h3 className="giveaway-head">
                If you can't take care of your pet, we will!
              </h3>
              <p className="giveaway-content">
                Whether you're unable to care for your pet or you simply want to
                help an animal find a loving home, your decision can make a
                world of difference. Join us in creating happier tails!
              </p>
              <button className="giveaway-btn">
                <Link to="/giveaway">Giveaway</Link>
              </button>
            </div>
          </div>
        </div>
        <div
          className="top-recipes"
          id="top-recipes-section"
          style={{ marginTop: "150px", width: "100%", marginBottom: "80px" }}
        >
          <h1
            style={{ width: "100%", textAlign: "center", marginBottom: "30px" }}
          >
            Here is the recipe of the day.....
          </h1>
          <RecipeName
            title={dayRecipeTitle}
            image={dayRecipeImage}
            description={description}
            handleFavourite={handleFavourite}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
