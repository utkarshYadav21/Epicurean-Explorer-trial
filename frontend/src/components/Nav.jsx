import React, { useEffect } from "react";
import "../css/users.css";
import { Link, useNavigate } from "react-router-dom";

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
            <img
              className="logo"
              src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/31-Animal-Shelter-Logos-for-Organizations-and-Humane-Societies/pet-love-logo-by-dionysius-samuel-dribbble.png"
              alt="Pet Palace Logo"
            />
            <Link to="/">petPalace</Link>
          </div>

          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/adopt">Adopt</Link>
            </li>
            <li>
              <Link to="/giveaway">Giveaway</Link>
            </li>
            <li>
              <Link to="/donate">
                Donate
              </Link>
            </li>
          </ul>
          <div className="right-section">
            <Link onClick={logout} to="/">
              Logout
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="left-section">
            <img
              className="logo"
              src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/31-Animal-Shelter-Logos-for-Organizations-and-Humane-Societies/pet-love-logo-by-dionysius-samuel-dribbble.png"
              alt="Pet Palace Logo"
            />
            <Link to="/">petPalace</Link>
          </div>

          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/adopt">Adopt</Link>
            </li>
            <li>
              <Link to="/giveaway">Giveaway</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
          </ul>
          <div className="right-section">
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          </div>
        </>
      )}
    </div>
  );
};

export default Nav;
