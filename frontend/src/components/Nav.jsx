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
              <Link to="/donate">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="right-section">
            <Link to="/favourites" style={{fontSize: "28px",marginRight:"10px"}} ><FaRegHeart /></Link>
            <Link to="/shopping-bag" style={{fontSize: "28px",marginRight:"10px"}} ><FiShoppingCart /></Link>
            <Link onClick={logout} to="/">
              Logout
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="left-section">
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
              <Link to="/contact-us">Contact Us</Link>
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
