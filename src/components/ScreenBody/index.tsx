import InfiniteScroll from "react-infinite-scroll-component";
import { Movie } from "../../types/types";
import { MoviesList } from "../MoviesList";
import "./styles/index.scss";

interface ScreenBodyTypes {
  movies: Movie[];
  loadMoreMovies: () => void;
  totalMovieResults: number;
}

export const ScreenBody = ({
  movies,
  loadMoreMovies,
  totalMovieResults,
}: ScreenBodyTypes) => {
  return (
    <>
      <InfiniteScroll
        dataLength={movies.length}
        next={loadMoreMovies}
        hasMore={movies.length < totalMovieResults}
        loader={<h2>Loading....</h2>}
      >
        <div className="movie-cards">
          <MoviesList movies={movies} />
        </div>
      </InfiniteScroll>
    </>
  );
};
