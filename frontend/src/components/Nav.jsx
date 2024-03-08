import React, { useEffect } from "react";
import "../css/users.css";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Nav = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("jwt");
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  
  return (
    <div className="navbar-container">
      {auth ? (
        <>
          <div className="left-section">
          <img  src="../../images/icon.png" alt="logo" />
            <Link to="/">Epicurean Explorer</Link>
          </div>

          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipe">Recipes</Link>
            </li>
            <li>
              <Link to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="right-section">
            <Link to="/favourites" style={{fontSize: "28px",marginRight:"10px"}} ><FaRegHeart /></Link>
            <Link to="/cart" style={{fontSize: "28px",marginRight:"10px"}} ><FiShoppingCart /></Link>
            <Link onClick={logout} to="/">
              Logout
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="left-section">
          <img className="logo" src="../../images/icon.png" alt="logo"/>
            <Link to="/">Epicurean Explorer</Link>
          </div>

          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipe">Recipe</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
          <div className="right-section">
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">SignUp</Link>
            </>
          </div>
        </>
      )}
    </div>
  );
};

export default Nav;
