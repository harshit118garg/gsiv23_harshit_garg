import InfiniteScroll from "react-infinite-scroll-component";
import { Movie } from "../../types/types";
import { MoviesList } from "../MoviesList";
import "./styles/index.scss";

interface ScreenBodyTypes {
  movies: Movie[];
  loadMoreMovies: () => void;
}

export const ScreenBody = ({ movies, loadMoreMovies }: ScreenBodyTypes) => {
  console.log("length of movies arr -> ", movies.length);
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
