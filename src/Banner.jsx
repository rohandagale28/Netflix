import React, { useState, useEffect } from "react";
import videobg from "./assets/back5.mp4";
import "./banner.css";
import { FaPlay } from "react-icons/fa";
import axios from "./Axios";
import requests from "./Requests";


const Banner = () => {
  const [movie, setMovie] = useState([]);
  // useEffect(() => {
  //   const logoutapp = () => {
  //     const dispatch = useDispatch();
  //   };
  // }, [dispatch]);
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchRomanticmoive);
      // const request2 = await axios.get(requests.fetchMovie);
      // const request = request1.concat(request2)
      // const request = {
      //   ...request1,
      //   ...request2,
      // };
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);
  return (
    <div className="main">
      <div className="overlay"></div>
      <div className="overlaytop"></div>
      {/* <video className="video" src={videobg} autoPlay loop muted/> */}
      <img
        className="video"
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
      ></img>
      <div className="content">
        <div className="left-content">
          <div className="movie-name">
            {movie?.name ||
              movie?.title ||
              movie?.original_name ||
              movie?.original_title}
          </div>
          <div className="movie-description">
            {movie?.overview?.slice(0, 160)}
          </div>
          {/* <img
            className="img-img"
            src="https://occ-0-3837-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTDAt4ztS3innpQCMSbDzEz2RAiCEKTcJByraB6XtBs_gaKB2QligxvnsOz43sfZGmojPg73ol5Lbb8rwgS0PZqtDwk4T3AMu-_x5I0vq3z5.webp?r=8b5"
          ></img> */}
        </div>
        <div className="divide">
          <span className="span-divider"></span>
        </div>
        <div className="button">
          <div className="left-button">
            <button className="play-button">
              <span className="fa-play">
                <FaPlay className="fa-play" />
              </span>
              <div className="play">Play</div>
            </button>
          </div>
          {/* <div className="right-button">
            <button className="play-button">More</button>
          </div> */}
        </div>
      </div>
      {/* <button onClick={logoutapp}>logout</button> */}
    </div>
  );
};

export default Banner;
