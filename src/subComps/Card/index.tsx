import { Link } from "react-router-dom";
import { reduceTextLength } from "../../helpers/textHelper";
import { ImgComp } from "../ImgComp";
import "./styles/index.scss";
import { CardTypes } from "./types/types";

export const Card = ({ movie }: CardTypes) => {
  return (
    <div className="card" key={movie.id}>
      <Link to={`movie/${movie.id}`}>
        <div className="card-body">
          <div className="card-image">
            <ImgComp movie={movie} />
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
