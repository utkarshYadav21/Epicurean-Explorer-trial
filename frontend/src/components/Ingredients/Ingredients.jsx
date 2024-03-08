import React, { useState } from "react";
import styles from "./ingredient.module.css";

const scrollToInstructions = () => {
  const instructionsSection = document.getElementById("instructionsSection");
  instructionsSection.scrollIntoView({ behavior: "smooth" });
};

const Ingredients = () => {
  const [selectedIngredient,setSelectedIngredient]=useState('');
  return (
    <div className={styles.galileoDesign}>
      <main className={styles.depth0Frame0}>
        <section className={styles.frameSave}>
          <div className={styles.grilledSalmonWithAvocadoSa}>
            <div className={styles.grilledSalmonWithAvocadoSaInner}>
              <div className={styles.depth6Frame0Parent} >
                <img
                  className={styles.depth6Frame05}
                  loading="lazy"
                  alt=""
                  src="/depth-6-frame-0@2x.png"
                />
                <div className={styles.frameGrilling}>
                  <div className={styles.depth7Frame03}>
                    <div className={styles.depth8Frame02}>
                      <div className={styles.depth9Frame0}>
                        <div className={styles.depth10Frame0}>
                          <h1 className={styles.grilledSalmonWith}>
                            Grilled Salmon with Avocado Salsa
                          </h1>
                        </div>
                      </div>
                      <div className={styles.depth9Frame1}>
                        <div className={styles.depth10Frame01}>
                          <div className={styles.thisGrilledSalmon}>
                            This Grilled Salmon is topped with a luscious
                            avocado salsa and is super simple to make. It's the
                            perfect recipe for summer entertaining.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameSeasoning}>
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

              <div className={styles.depth5Frame5} style={{cursor:"pointer"}} onClick={()=>{
                console.log("clicked")
              }}>
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
                <div className={styles.depth6Frame15}>
                  <div className={styles.depth7Frame016}>
                    <div className={styles.redOnion}>Red onion</div>
                  </div>
                </div>
              </div>
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