import { useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "./Sreens/HomeScreen";
import LoginScreen from "./Sreens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
// import LoginScreen from "./Sreens/Loiginscreen";
// import { getAuth, signOut } from "firebase/auth";

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
        dispatch(logout());
        // console.log("loggedout");
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
