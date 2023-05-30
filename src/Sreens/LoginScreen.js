import React, { useState } from "react";
import "./loginscreen.css";
import netflix from "../netflix.png";
import Signinscreen from "./Signinscreen";

const LoginScreen = () => {
  const [signin, setSignin] = useState(false);
  return (
    <div className="loginscreen">
      <div className="login-background">
        <img className="login-image" src={netflix} alt="background"></img>
      </div>
      <button onClick={() => setSignin(true)} className="login-button">
        SIGN IN
      </button>
      <div className="loginscreen-gradient"></div>
      <div className="loginscreen-body">
        {signin ? (
          <Signinscreen />
        ) : (
          <>
            <div className="login-title">
              Unlimited movies, TV shows and more.
            </div>
            <div className="login-title-2">Watch anywhere. Cancel anytime.</div>
            <div className="loginscreen-input">
              <form className="login-form">
                <div className="input-placement">
                  <input
                    className="login-input"
                    type="email"
                    placeholder="Email Address"
                    size="30"
                  />
                </div>
                <div className="button-placement">
                  <button
                    onClick={() => setSignin(true)}
                    className="loginscreen-button"
                  >
                    GET STARTED
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
