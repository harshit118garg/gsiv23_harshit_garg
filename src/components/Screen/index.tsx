import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { discoverMoviesAsync } from "../../redux/slice";
import { AppDispatch, RootState } from "../../store/store";
import { MoviesList } from "../MoviesList";
import "./styles/index.scss";

export const Screen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const results = useSelector(
    (state: RootState) => state.getMovies.apiResponse.results
  );
  const { error, loading } = useSelector((state: RootState) => state.getMovies);

  const fetchMovies = (pageNum: number) => {
    dispatch(discoverMoviesAsync(pageNum));
  };

  useEffect(() => {
    fetchMovies(1);
  }, [dispatch]);

  const loadMoreMovies = () => {
    fetchMovies(page + 1);
  };

  const page = useSelector(
    (state: RootState) => state.getMovies.apiResponse.page
  );

  return (
    <>
      <div className="screen">
        <InfiniteScroll
          dataLength={results.length}
          next={loadMoreMovies}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div className="movies-list">
            <div className="movie-cards">
              <MoviesList movies={results} />
            </div>
          </div>
        </InfiniteScroll>
        {error && (
          <div className="error-box">
            <h2>Oh Oh!! An error occured while fetching your favourite movies</h2>
          </div>
        )}
      </div>
    </>
  );
};
