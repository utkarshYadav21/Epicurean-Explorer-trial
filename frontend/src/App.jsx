import React from "react";
import { BrowserRouter, Routes, Route,  useNavigationType,
  useLocation } from "react-router-dom";
import Users from "./components/Users";
import RecipeCard from "./components/RecipeCard";
import RecipeCardList from "./components/RecipeCardList";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Contact from "./components/Contact/Contact";
import  Footer from "./components/Footer";
import RecipeProfile from "./components/RecipeProfile";
import Ingredients from "./components/Ingredients/Ingredients";
import Favorites from "./components/Favourites";
import Cart from "./components/cart";
function App() {
  return (
    <div className="full-container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<RecipeProfile />} />
          <Route path="/login" element={<Users />} />
          <Route path="/signup" element={<Users />} />
          <Route path="/contactus" element= {<Contact/>} />
          <Route path="/ingredients" element={<Ingredients/>}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
