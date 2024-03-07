import React from "react";
import "../css/Home.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


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
      <div className="adopt-div">
        <div>
          <h3 className="adopt-head">Welcome to Pet Palace</h3>
          <p className="adopt-content">
            Glad that you care for animals. We make sure you will not repent
            your decision of adopting a pet. Embrace joy and companionship by
            adopting a pet today. Provide a loving home and make a lasting
            impact on a furry friend's life.
          </p>
          <button className="adopt-btn" ><Link to="/adopt">Adopt</Link></button>
        </div>
        
      </div>
      <div className="giveaway-div">
        <div>
          <h3 className="giveaway-head">
            If you can't take care of your pet, we will!
          </h3>
          <p className="giveaway-content">
            Whether you're unable to care for your pet or you simply want to
            help an animal find a loving home, your decision can make a world of
            difference. Join us in creating happier tails!
          </p>
          <button className="giveaway-btn"><Link to="/giveaway">Giveaway</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
