import React, { useState, useEffect } from "react";
import styles from "./ingredient.module.css";
import { useParams } from "react-router-dom";

const Ingredients = () => {
  const [RecipeTitle, setRecipeTitle] = useState("");
  const [RecipeImage, setRecipeImage] = useState("");
  const [listIngerdients, setListIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [description, setDescription] = useState("");
  const apiUrl = "R8OO00YzjtyAMfp-O1lpcxhdPuubeMD_pM92fOE8t7on5uln";
  useEffect(() => {
    console.log(selectedIngredient);
    setIngredientToCart();
  }, [selectedIngredient]);

  const scrollToInstructions = () => {
    const instructionsSection = document.getElementById("instructionsSection");
    instructionsSection.scrollIntoView({ behavior: "smooth" });
  };

  const { id } = useParams();
  useEffect(() => {
    getRecipe();
    getIngredients();
  }, []);
  const getDescription = async () => {
    console.log();
    let des = await fetch("http://127.0.0.1:8000/api/v1/llmmodel/description", {
      method: "post",
      body: JSON.stringify({ recipename: RecipeTitle }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    des = await des.json();
    setDescription(des.description);
  };
  const setIngredientToCart = async () => {
    console.log(selectedIngredient)
    let res = await fetch("http://127.0.0.1:8000/api/v1/cart", {
      method: "post",
      body: JSON.stringify({ recipename: RecipeTitle, selectedIngredient }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    res = await res.json();
    console.log(res);
  };
  const getRecipe = async () => {
    let recipe = await fetch(`https://apis-new.foodoscope.com/recipe/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiUrl}`,
      },
    });
    recipe = await recipe.json();
    if (recipe.success === "true") {
      setRecipeTitle(recipe.payload.Recipe_title);
      setRecipeImage(recipe.payload.img_url);
          getDescription();
    } else {
      alert("no recipe of the day found");
    }
  };
  const getIngredients = async () => {
    let ingIns = await fetch("http://127.0.0.1:8000/api/v1/llmmodel", {
      method: "post",
      body: JSON.stringify({ recipeid: id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    ingIns = await ingIns.json();
    let { ingredients, instructions } = ingIns;
    console.log(ingredients, instructions);
    setListIngredients(ingredients);
  };

  return (
    <div className={styles.galileoDesign}>
      <main className={styles.depth0Frame0}>
        <section className={styles.frameSave}>
          <div className={styles.grilledSalmonWithAvocadoSa}>
            <div className={styles.grilledSalmonWithAvocadoSaInner}>
              <div className={styles.depth6Frame0Parent}>
                <img
                  className={styles.depth6Frame05}
                  loading="lazy"
                  alt=""
                  src={RecipeImage}
                />
                <div className={styles.frameGrilling}>
                  <div className={styles.depth7Frame03}>
                    <div className={styles.depth8Frame02}>
                      <div className={styles.depth9Frame0}>
                        <div className={styles.depth10Frame0}>
                          <h1 className={styles.grilledSalmonWith}>
                            {RecipeTitle}
                          </h1>
                        </div>
                      </div>
                      <div className={styles.depth9Frame1}>
                        <div className={styles.depth10Frame01}>
                          <div
                            className={styles.thisGrilledSalmon}
                            style={{ marginTop: "-60px" }}
                          >
                            {description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={styles.frameSeasoning}
                    style={{ marginTop: "-16px" }}
                  >
                    <button className={styles.depth8Frame03}>
                      <div className={styles.depth9Frame01}>
                        <div className={styles.depth10Frame02}>
                          <b className={styles.save}>Favourite</b>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.depth4Frame1Parent}>
              <div className={styles.depth4Frame12}>
                <button
                  className={styles.depth5Frame02}
                  onClick={scrollToInstructions}
                >
                  <div className={styles.depth6Frame06}>
                    <div className={styles.depth7Frame04}>
                      <b className={styles.jumpToRecipe}>Jump to Recipe</b>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.depth4Frame2}>
                <div className={styles.depth5Frame03}>
                  <div className={styles.depth6Frame07}>
                    <b className={styles.ingredients}>Ingredients</b>
                  </div>
                </div>
              </div>
              {listIngerdients.map((ing, index) => {
                return (
                  <div
                    key={index}
                    className={styles.depth5Frame5}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        setSelectedIngredient(ing);
                      }}
                  >
                    <div className={styles.depth6Frame013}>
                      <div className={styles.depth7Frame015}>
                        <div className={styles.depth7Frame025}>
                          <img
                            className={styles.createSalsaIcon}
                            alt=""
                            src="../../../images/plus.svg"
                          />
                          <div className={styles.depth8Frame018} />
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.depth6Frame15}
                      
                    >
                      <div className={styles.depth7Frame016}>
                        <div >{ing}</div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className={styles.recipejumpframe}>
                <div className={styles.depth4Frame4} id="instructionsSection">
                  <div className={styles.depth5Frame05}>
                    <div className={styles.depth6Frame015}>
                      <b className={styles.instructions}>Instructions</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.oliveOilDrop}>
                <div className={styles.depthFrameDepthFrameVector}>
                  <div className={styles.depth5Frame06}>
                    <div className={styles.depth6Frame17}>
                      <div className={styles.depth7Frame020}>
                        <div className={styles.depth8Frame012}>
                          <b className={styles.seasonTheSalmon}>
                            Season the salmon
                          </b>
                        </div>
                      </div>
                      <div className={styles.depth7Frame1}>
                        <div className={styles.depth8Frame013}>
                          <div className={styles.drizzleTheSalmon}>
                            Drizzle the salmon with olive oil and sprinkle with
                            salt and black pepper
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Ingredients;
