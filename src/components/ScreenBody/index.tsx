import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { discoverMoviesAsync, findMoviesAsync } from "../../redux/slice";
import { AppDispatch, RootState } from "../../store/store";
import { MoviesList } from "../MoviesList";
import "./styles/index.scss";
import { Loader } from "../../subComps/Loader";
import { ErrorBox } from "../../subComps/ErrorBox";
import { TopNav } from "../TopNav";

interface ScreenBodyTypes {
  navProp: boolean;
}

export const ScreenBody = ({ navProp }: ScreenBodyTypes) => {
  const [query, setQuery] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  const dispatch = useDispatch<AppDispatch>();
  const results = useSelector(
    (state: RootState) => state.getMovies.apiResponse.results
  );

  const queryMovies = useSelector(
    (state: RootState) => state.getMovies.apiQueryResponse.results
  );
  const { error, loading } = useSelector((state: RootState) => state.getMovies);

  const fetchMovies = (pageNum: number) => {
    dispatch(discoverMoviesAsync(pageNum));
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      query === "" ? fetchMovies(1) : dispatch(findMoviesAsync(query));
    }, 800);

    return () => clearTimeout(timeOut);
  }, [dispatch, query]);

  const loadMoreMovies = () => {
    fetchMovies(page + 1);
  };

  const page = useSelector(
    (state: RootState) => state.getMovies.apiResponse.page
  );
  const queryPageNum = useSelector(
    (state: RootState) => state.getMovies.apiQueryResponse.page
  );

  console.log("queryMovies", queryMovies);

  return (
    <>
      <TopNav navProp={navProp} query={query} changeHandler={changeHandler} />
      <div className="screen-body">
        {loading && <Loader />}
        <div className="movies-list">
          <InfiniteScroll
            dataLength={results.length}
            next={loadMoreMovies}
            hasMore={true}
            loader={<h2>Loading....</h2>}
          >
            <div className="movie-cards">
              <MoviesList movies={results} />
            </div>
          </InfiniteScroll>
        </div>
        {queryMovies.length > 1 && (
          <div className="movies-list">
            <InfiniteScroll
              dataLength={queryMovies.length}
              next={loadMoreMovies}
              hasMore={true}
              loader={<h2>Loading....</h2>}
            >
              <div className="movie-cards">
                <MoviesList movies={queryMovies} />
              </div>
            </InfiniteScroll>
          </div>
        )}
        {error && <ErrorBox />}
      </div>
    </>
  );
};
