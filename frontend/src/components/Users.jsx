import React, { useState } from "react";
import "../css/users.css";
import { Link } from "react-router-dom";

const Users = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(name,email,password,confirmPass)
    let user = await fetch("http://127.0.0.1:8000/api/v1/users/signup", {
      method:"post",
      body: JSON.stringify({
        name,
        email,
        password,
        passwordconfirm: confirmPass,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    user = await user.json();
    console.log(user);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
  };
  return (
    <div className="user-container">
      <div
        className={`user-container container ${
          isSignup ? "right-panel-active" : ""
        }`}
      >
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <input type="text" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            <input type="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            <input
              type="password"
              value={confirmPass}
              placeholder="Confirm Password"
              onChange={(e)=>setConfirmPass(e.target.value)}
            />
            <button onClick={handleSignUp}>SignUp</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1>Login</h1>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <a href="#">Forgot Your Password</a>
            <button>Login</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <Link to="/login">
                <button className="ghost" onClick={toggleForm}>
                  Sign In
                </button>
              </Link>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your details and start the journey with us</p>
              <Link to="/signup">
                <button className="ghost" onClick={toggleForm}>
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
