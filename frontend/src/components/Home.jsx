import React from "react";
import "../css/Home.css";
import { FaSearch } from "react-icons/fa";


const Home = () => {
  return (
    <div className="intro-container">
      <h1 className="intro">
        Search among <span className="quantity">1500</span> recipes
      </h1>
      <p className="intro-des">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen b
      </p>
      <div className="searching">
        <div className="search-div">
          <input
            type="text"
            placeholder="What are you looking for..."
            className="search-field"
          />
          <FaSearch className="search-icon" style={{ fontSize: "28px", marginLeft:"12px"}} />
        </div>
      </div>
    </div>
  );
};

export default Home;
