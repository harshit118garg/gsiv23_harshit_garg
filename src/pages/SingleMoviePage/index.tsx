import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SingleMovie } from "../../components/SingleMovie";
import { TopNav } from "../../components/TopNav";
import { fetchAMovieAsync } from "../../redux/slice";
import { RootState } from "../../store/store";
import { Loader } from "../../subComps/Loader";
import { CastMember, CrewMember } from "../../types/types";

interface SingleMoviePagePropTypes {
  navProp: boolean;
}

export const SingleMoviePage = ({ navProp }: SingleMoviePagePropTypes) => {
  const loading = useSelector((state: RootState) => state.getMovies.loading);
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

  const movieDirector = singleMovie?.credits?.crew.filter(
    (crewMember: CrewMember) => crewMember.job === "Director"
  )[0];

  const castMembers: string[] = [];
  singleMovie &&
    singleMovie?.credits?.cast?.map((cast: CastMember) =>
      castMembers.push(cast.name)
    );
  return (
    <>
      <TopNav navProp={navProp} />
      {loading && <Loader />}
      {singleMovie && (
        <SingleMovie
          movie={singleMovie}
          castMembers={castMembers}
          movieDirector={movieDirector}
        />
      )}
    </>
  );
};
