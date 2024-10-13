import React, { useState } from "react";
import "./CSS/Login.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdWindPower } from "react-icons/md";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const login = async () => {
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();
    if (result.success) {
      // Handle successful login (e.g., redirect, store token, etc.)
      toast.success("Logged in Successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      localStorage.setItem("auth-token", result.token);
      // console.log(localStorage.getItem("auth-token"));
     setTimeout(()=>{
      window.location.replace("/");
     },3000)
    } else {
      toast.error(`${result.error}`, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const signup = async () => {
    const response = await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: name, email, password }),
    });
    const result = await response.json();
    if (result.success) {
      // Handle successful signup (e.g., redirect, store token, etc.)
      toast.success("Sign up Successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      localStorage.setItem("auth-token", result.token);
      setTimeout(()=>{
        window.location.replace("/");
       },3000)
    } else {
      toast.error(`${result.error}`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="loginsignup">
      <div className="login-con">
        <h1>{state}</h1>
        <div className="login-fields">
          {state === "Sign Up" && (
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={state === "Login" ? login : signup}
          className="login-btn"
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="login-login">
            Already have an account?
            <span className="span-text">
              <b onClick={() => setState("Login")}>Login Here</b>
            </span>
          </p>
        ) : (
          <p className="login-login">
            Don't have an account?
            <span className="span-text">
              <b onClick={() => setState("Sign Up")}>Sign Up Here</b>
            </span>
          </p>
        )}

        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
          transition={Bounce}
        />
      </div>
    </div>
  );
};

export default LoginSignup;
