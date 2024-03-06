import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import RecipeCard from "./components/RecipeCard";
import RecipeCardList from "./components/RecipeCardList";
import Home from "./components/Home";
import Nav from "./components/Nav";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
