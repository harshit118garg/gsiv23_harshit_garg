import React, { useEffect } from "react";
import { MoviesList } from "../MoviesList";
import "./styles/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { State, discoverMoviesAsync } from "../../redux/slice";
import { AppDispatch } from "../../store/store";

export const Screen = () => {
  const { apiResponse, error, loading } = useSelector((state: State) => state);
  const dispatch = useDispatch<AppDispatch>();

  const fetchMovies = () => {
    dispatch(discoverMoviesAsync());
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const movies = apiResponse.results;

  return (
    <>
      <div className="screen">
          <MoviesList movies={movies} />
      </div>
    </>
  );
};
