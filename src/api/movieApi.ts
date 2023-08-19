import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_MOVIE_API_KEY;

const BASE_URL = `https://api.themoviedb.org/3`;

export const discoverMovies = async (page: number) => {
  return axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      page: page,
      sort_by: "popularity.desc",
      include_adult: false,
      language: "en-US",
    },
  });
};

export const fetchSingleMovie = async (id: number) => {
  return axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      append_to_response: "credits",
    },
  });
};

/*  

https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc


https://api.themoviedb.org/3/movie/569094?api_key=${API_KEY}&language=en-US&append_to_response=credits

*/
