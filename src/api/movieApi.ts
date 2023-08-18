import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_MOVIE_API_KEY;

const BASE_URL = `https://api.themoviedb.org/3`;

export const discoverMovies = async (page: number) => {
  return axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      page: page,
      sort_by: "popularity.desc",
    },
  });
};

/* 

https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc

*/
