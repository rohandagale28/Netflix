import React, { useRef, useState } from "react";
import "./signinscreen.css";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import { Link } from "react-router-dom";

const Signinscreen = () => {
  const [error, setError] = useState([]);
  const [exist, setExist] = useState([]);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,

        passwordRef.current.value
      );
      setExist(null);
      console.log(user);
    } catch (error) {
      setExist("User already exist");
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,

        passwordRef.current.value
      );
      setError("");

      console.log(user);
    } catch (error) {
      setError("password is wrong");
    }
  };

  return (
    <div className="signinscreen">
      <form className="signinform">
        <div className="sign-in">Sign In</div>
        <input
          ref={emailRef}
          className="email-holder"
          placeholder="Email"
          type="email"
        />
        <span>{exist}</span>

        <input
          ref={passwordRef}
          className="password-holder"
          placeholder="Password"
          type="password"
        />
        <span className="error">{error}</span>
        <button onClick={login} className="loginscreen-button" type="submit">
          Sign In
        </button>

        <div>
          <span className="register" onClick={register}>
            register
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signinscreen;
