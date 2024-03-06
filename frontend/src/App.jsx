import React from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import RecipeCard from "./components/RecipeCard";
import RecipeCardList from "./components/RecipeCardList";

function App() {
  return (
    <div className="full-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element />
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
