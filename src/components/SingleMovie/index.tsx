import { IMG_NOT_AVAILABLE, IMG_PATH_300 } from "../../helpers/constants";
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
      {movie && (
        <div className="single-movie">
          <div className="movie-card-body">
            <div className="img-part">
              <img
                src={
                  movie?.poster_path
                    ? `${IMG_PATH_300}${movie?.poster_path}`
                    : IMG_NOT_AVAILABLE
                }
                alt={movie?.title}
              />
            </div>
            <div className="details-part">
              <div className="row1">
                <div className="head">
                  {movie?.title} <span>{movie?.vote_average}</span>
                </div>
              </div>
              <div className="row2">
                <span>{movie?.release_date}</span> <br />
                <span>{movie?.runtime}</span> <br />
                <span>{movieDirector?.name}</span>
              </div>
              <div className="row3">
                {castMembers.map((cast: string, i: number) => {
                  return <span key={i}> {cast} ,</span>;
                })}
              </div>
              <div className="row4">
                <p>{movie?.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
