const API_KEY = "278f13bfcd0fd897ea827e9e728add36";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopreated: `/discover/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchMovie: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchRomanticmoive: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchActionmovie: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  fetchHorror: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

// https://api.themoviedb.org/3/discover/tv?api_key=278f13bfcd0fd897ea827e9e728add36&with_networks=213
