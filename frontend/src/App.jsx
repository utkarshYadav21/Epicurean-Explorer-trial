import React,{useState} from "react";
import "./App.css";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Users from "./components/Users";

function App() {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };
  return (
    <div className="full-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element />
          <Route path="/login" element={<Users />} />
          <Route path="/signup" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
