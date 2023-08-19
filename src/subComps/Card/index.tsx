import { Link } from "react-router-dom";
import { IMG_NOT_AVAILABLE, IMG_PATH_300 } from "../../helpers/constants";
import { reduceTextLength } from "../../helpers/textHelper";
import "./styles/index.scss";
import { CardTypes } from "./types/types";

export const Card = ({ movie }: CardTypes) => {
  return (
    <div className="card" key={movie.id}>
      <Link to={`movie/${movie.id}`}>
        <div className="card-body">
          <div className="card-image">
            <img
              src={
                movie.poster_path
                  ? `${IMG_PATH_300}${movie.poster_path}`
                  : IMG_NOT_AVAILABLE
              }
              alt={movie.title}
            />
          </div>
          <div className="movie-info">
            <div className="row">
              <div className="title">{movie.title}</div>
              <div className="rating">{movie.vote_average}</div>
            </div>
            <div className="description">
              <p>{reduceTextLength(movie.overview)}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
