import React from "react";
import { IMG_NOT_AVAILABLE, IMG_PATH_300 } from "../../helpers/constants";
import { Movie, SingleMovieInfo } from "../../types/types";

export interface ImgCompTypes {
  movie: Movie | SingleMovieInfo;
}

export const ImgComp = ({ movie }: ImgCompTypes) => {
  return (
    <>
      <img
        src={
          movie.poster_path
            ? `${IMG_PATH_300}${movie.poster_path}`
            : IMG_NOT_AVAILABLE
        }
        alt={movie.title}
      />
    </>
  );
};
