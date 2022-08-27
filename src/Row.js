import axios from "./Axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="row_posters">
        <div className="row_poster_spacing"></div>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row_poster"
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
