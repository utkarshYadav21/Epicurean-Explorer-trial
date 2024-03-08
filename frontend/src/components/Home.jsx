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
    console.log(des);
    console.log(des.description);
    setDescription(des.description);
  };

  const handleImageUpload = (event) => {
    if (event.target && event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedImage(file);
    } else {
      console.error('No file selected or event target is undefined');
    }
  };
  const handleImageRemove = () => {
    setSelectedImage(null);
  };
  return (
    <div>
      <div className="page-container">
        <div className="intro-container">
          <h1 className="intro">
            Explore more than <br></br>{" "}
            <span className="quantity">118,000</span> recipes
          </h1>
          <p className="intro-des">
            <i>
              "Dive into the sea of numerous delicious recipes , get a cloth
              ready to <br></br>wipe out the water dropping from your mouth"
            </i>
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
                <div className="uploaded-image-container">
                  <IoCloseCircleOutline
                    onClick={handleImageRemove}
                    style={{
                      fontSize: "28px",
                      margin: "0px 10px 0px 10px",
                      cursor: "pointer",
                      marginTop: "5px",
                      color: "black",
                    }}
                  />
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Uploaded"
                    className="uploaded-image"
                  />
                  <p className="selected-image-name">{selectedImage.name}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="adopt-div-r">
          <div>
            <h3 className="adopt-head">Just Snap it! , Search it!</h3>
            <p className="adopt-content">
              <i>
                Your yummy!! dish that you are curious about is just click
                away,capture it and just upload it here & take up your weapons
                to start making it
              </i>
            </p>
            <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} />
    <button onClick={() => document.querySelector('input[type="file"]').click()}>Upload</button>
            
          </div>
        </div>
        <div className="giveaway-div">
          <div className="giveaway-div-in">
            <h3 className="adopt-head">
              Tired of the same meal on repeat?,<br></br> Try something
              Different!
            </h3>
            <p className="giveaway-content">
              <i>
                Are you also bored of eating the same taste everyday? , give a
                tinch of new taste to yourself and your loved ones by exploring
                various cuisines of different continents
              </i>
            </p>
            <Link to="/recipe">
              <button className="giveaway-btn">Search</button>
            </Link>
          </div>
        </div>

        <div
          className="top-recipes"
          id="top-recipes-section"
          style={{ marginTop: "150px", width: "100%", marginBottom: "80px" }}
        >
          <h1 style={{ width: "auto", textAlign: "left", marginLeft: "19%" }}>
            Let's See what's in the menu today😋
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
