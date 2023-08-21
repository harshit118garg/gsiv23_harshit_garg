import { castHelperFunction } from "../../helpers/castHelper";
import { ImgComp } from "../../subComps/ImgComp";
import { CrewMember, SingleMovieInfo } from "../../types/types";
import "./styles/index.scss";

interface SingleMoviePropTypes {
  movie: SingleMovieInfo;
  movieDirector: CrewMember | undefined;
  castMembers: string[];
}

export const SingleMovie = ({
  movie,
  movieDirector,
  castMembers,
}: SingleMoviePropTypes) => {
  return (
    <>
      <div className="single-movie">
        <div className="movie-card-body">
          <div className="img-part">
            <ImgComp movie={movie} />
          </div>
          <div className="details-part">
            <div className="row1">
              <div className="head">
                <h3>
                  {movie?.title} <span>({movie?.vote_average})</span>
                </h3>
              </div>
            </div>
            <div className="row2">
              <p>
                <span>Date of Release:</span> {movie?.release_date} |{" "}
                <span>Length:</span> {movie?.runtime} minutes |{" "}
                <span>Director:</span> {movieDirector?.name}
              </p>
            </div>
            <div className="row3">
              <p>
                <span>Cast: </span>
                {castHelperFunction(castMembers)}
              </p>
            </div>
            <div className="row4">
              <p>
                <span>Description: </span>
                {movie?.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
