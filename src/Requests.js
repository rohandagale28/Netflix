const API_KEY = "278f13bfcd0fd897ea827e9e728add36";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  // fetchmovie: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
};

export default requests;


// https://api.themoviedb.org/3/discover/tv?api_key=278f13bfcd0fd897ea827e9e728add36&with_networks=213