import React from "react";
import styles from "./Ingredients/ingredient.module.css";

const RecipeName = ({ title, image, handleFavourite,description }) => {
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
                  src={`${image}`}
                />
                <div className={styles.frameGrilling}>
                  <div className={styles.depth7Frame03}>
                    <div className={styles.depth8Frame02}>
                      <div className={styles.depth9Frame0}>
                        <div className={styles.depth10Frame0} style={{marginTop:"-20px"}}>
                          <h1 className={styles.grilledSalmonWith}>{title}</h1>
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
                  <div className={styles.frameSeasoning}>
                    <button className={styles.depth8Frame03} style={{ marginTop: "-16px" }}>
                      <div className={styles.depth9Frame01}>
                        <div className={styles.depth10Frame02}>
                          <b className={styles.save} onClick={handleFavourite} >
                            Favourite
                          </b>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.depth4Frame1Parent}>
              <div className={styles.depth4Frame12}>
                <button className={styles.depth5Frame02}></button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RecipeName;
