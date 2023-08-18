import React from "react";
import "./styles/index.scss";
import { reduceTextLength } from "../../helpers/textHelper";
import { Movie } from "../../types/types";
import { IMG_NOT_AVAILABLE, IMG_PATH_300 } from "../../helpers/constants";
import { MoviesListTypes } from "./types/types";

export const MoviesList = ({ movies }: MoviesListTypes) => {
  return (
    <>
      {movies &&
        movies.map((data: Movie) => {
          return (
            <div className="card" key={data.id}>
              <div className="card-image">
                <img
                  src={
                    data.poster_path
                      ? `${IMG_PATH_300}${data.poster_path}`
                      : IMG_NOT_AVAILABLE
                  }
                  alt={data.title}
                />
              </div>
              <div className="movie-info">
                <div className="row">
                  <div className="title">{data.title}</div>
                  <div className="rating">{data.vote_average}</div>
                </div>
                <div className="description">
                  <p>{reduceTextLength(data.overview)}</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
