import InfiniteScroll from "react-infinite-scroll-component";
import { MoviesList } from "../MoviesList";
import "./styles/index.scss";
import { Movie } from "../../types/types";

interface ScreenBodyTypes {
  movies: Movie[];
  loadMoreMovies: () => void;
}

export const ScreenBody = ({ movies, loadMoreMovies }: ScreenBodyTypes) => {

  return (
    <>
      <InfiniteScroll
        dataLength={movies.length}
        next={loadMoreMovies}
        hasMore={true}
        loader={<h2>Loading....</h2>}
      >
        <div className="movie-cards">
          <MoviesList movies={movies} />
        </div>
      </InfiniteScroll>
    </>
  );
};
