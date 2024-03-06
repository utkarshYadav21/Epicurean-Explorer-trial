import React from "react";
import "../css/Home.css"
const Home = () => {
  return (
    <div>
      <h1>search among 1500 recipes</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen b
      </p>
      <div className="searching">
        <h4 style={{ width: "98%", textAlign: "center", marginTop: "30px" }}>
          What are you looking for
        </h4>
        <div className="search-div">
          <input
            type="text"
            placeholder="Search..."
            onChange={searchPets}
            className="search-field"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
