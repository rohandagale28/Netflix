import React, { useEffect } from "react";
import Banner from "../Banner";
import Nav from "../Nav";
import Row from "../Row";
import requests from "../Requests";
// import { getAuth, signOut } from "firebase/auth";
// import { auth } from "../firebase";
const HomeScreen = () => {
  // useEffect(() => {
  //   const unsubscribe = auth.getAuth();
  //   signOut(auth);
  //   return unsubscribe;
  // }, []);

  return (
    <div className="Homescreen">
      <Nav />
      <Banner />
      <Row title="Trending" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="New On Netflix" fetchUrl={requests.fetchMovie} />
      <Row title="Horror" fetchUrl={requests.fetchRomanticmoive} />
      <Row title="Recommendation" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Anime" fetchUrl={requests.fetchHorror} />
      <Row title="Trending" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="New On Netflix" fetchUrl={requests.fetchMovie} />
      <Row title="Horror" fetchUrl={requests.fetchRomanticmoive} />
      <Row title="Recommendation" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Anime" fetchUrl={requests.fetchHorror} />
      {/* <button onClick={unsubscribe}>logout</button> */}
    </div>
  );
};

export default HomeScreen;
