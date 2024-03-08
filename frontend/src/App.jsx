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
import Ingredients from "./components/Ingredients/Ingredients";

function App() {
  return (
    <div className="full-container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<RecipeCard />} />
          <Route path="/cardList" element={<RecipeCardList />} />
          <Route path="/login" element={<Users />} />
          <Route path="/signup" element={<Users />} />
          <Route path="/contactus" element= {<Contact/>} />
          <Route path="/ingredients" element={<Ingredients/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
