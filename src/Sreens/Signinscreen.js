import React, { useRef, useState } from "react";
import "./signinscreen.css";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Signinscreen = () => {
  const [error, setError] = useState([]);
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
      console.log(user);
    } catch (error) {
      alert("the user alreasy exitst");
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
