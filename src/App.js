import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Sreens/HomeScreen";
import LoginScreen from "./Sreens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { getAuth, signOut } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {!user ? (
            <Route exact path="/loginscreen" element={<LoginScreen />} />
          ) : (
            <Route exact path="/" element={<HomeScreen />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
