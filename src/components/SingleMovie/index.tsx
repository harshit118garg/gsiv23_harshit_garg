import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_NOT_AVAILABLE, IMG_PATH_300 } from "../../helpers/constants";
import { fetchAMovieAsync } from "../../redux/slice";
import { RootState } from "../../store/store";
import { Loader } from "../../subComps/Loader";
import { CastMember, CrewMember } from "../../types/types";
import { TopNav } from "../TopNav";
import "./styles/index.scss";

interface SingleMoviePropTypes {
  navProp: boolean;
}

export const SingleMovie = ({ navProp }: SingleMoviePropTypes) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const fetchMovie = async (movieId: number) => {
    await dispatch(fetchAMovieAsync(movieId));
  };

  useEffect(() => {
    fetchMovie(Number(id));
  }, []);

  const singleMovie = useSelector(
    (state: RootState) => state.getMovies.singleMovie
  );

  const loading = useSelector((state: RootState) => state.getMovies.loading);

  const movieDirector = singleMovie?.credits?.crew.filter(
    (crewMember: CrewMember) => crewMember.job === "Director"
  );

  const castMembers: string[] = [];
  singleMovie?.credits?.cast.map((cast: CastMember) =>
    castMembers.push(cast.name)
  );

  return (
    <>
      <TopNav navProp={navProp} />
      {loading && <Loader />}
      {singleMovie && (
        <div className="single-movie">
          <div className="movie-card-body">
            <div className="img-part">
              <img
                src={
                  singleMovie?.poster_path
                    ? `${IMG_PATH_300}${singleMovie?.poster_path}`
                    : IMG_NOT_AVAILABLE
                }
                alt={singleMovie?.title}
              />
            </div>
            <div className="details-part">
              <div className="row1">
                <div className="head">
                  {singleMovie?.title} <span>{singleMovie?.vote_average}</span>
                </div>
              </div>
              <div className="row2">
                <span>{singleMovie?.release_date}</span> <br />
                <span>{singleMovie?.runtime}</span> <br />
                {movieDirector?.map((director: CrewMember, i: number) => {
                  return (
                    <div key={i}>
                      <span>{director?.name}</span>
                    </div>
                  );
                })}
              </div>
              <div className="row3">
                {castMembers.map((cast: string, i: number) => {
                  return <span key={i}> {cast} ,</span>;
                })}
              </div>
              <div className="row4">
                <p>{singleMovie?.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
