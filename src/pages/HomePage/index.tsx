import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScreenBody } from "../../components/ScreenBody";
import { TopNav } from "../../components/TopNav";
import { discoverMoviesAsync, findMoviesAsync } from "../../redux/slice";
import { AppDispatch, RootState } from "../../store/store";
import { ErrorBox } from "../../subComps/ErrorBox";
import { Loader } from "../../subComps/Loader";
import "./styles/index.scss";

export interface HomePagePropTypes {
  navProp: boolean;
}

export const HomePage = ({ navProp }: HomePagePropTypes) => {
  // use state for seach input
  const [query, setQuery] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  const dispatch = useDispatch<AppDispatch>();
  const { error, loading } = useSelector((state: RootState) => state.getMovies);

  // fetch latest movies
  const fetchLatestMovies = (pageNum: number) => {
    dispatch(discoverMoviesAsync(pageNum));
  };

  const { page, results, total_results } = useSelector(
    (state: RootState) => state.getMovies.apiResponse
  );

  // fetch movies based on userQuery
  const fetchQueryMovies = (item: { query: string; pageNum: number }) => {
    dispatch(findMoviesAsync(item));
  };

  const { pageNum, queryResults, total_resultsQuery } = useSelector(
    (state: RootState) => state.getMovies.apiQueryResponse
  );

  // load more latest movies on scroll
  const loadMoreLatestMovies = () => {
    fetchLatestMovies(page);
  };

  // load more pages of movies based on userQuery
  const loadMoreQueryMovies = () => {
    let item = { query, pageNum };
    fetchQueryMovies(item);
  };

  // useEffect for Query Movies
  useEffect(() => {
    if (query) {
      let item = { query, pageNum };
      let timeOut = setTimeout(() => {
        fetchQueryMovies(item);
      }, 900);

      return () => clearTimeout(timeOut);
    }
  }, [query, dispatch]);

  // useEffect for latest movies
  useEffect(() => {
    fetchLatestMovies(page);
  }, [dispatch]);

  return (
    <>
      <TopNav navProp={navProp} query={query} changeHandler={changeHandler} />
      {loading && <Loader />}
      <div className="home-page-body">
        {query === "" && results && results.length > 0 && (
          <div className="movies-list">
            <ScreenBody
              movies={results}
              loadMoreMovies={loadMoreLatestMovies}
              totalMovieResults={total_results}
            />
          </div>
        )}
        {query !== "" && queryResults.length > 0 && (
          <div className="movies-list">
            <ScreenBody
              movies={queryResults}
              loadMoreMovies={loadMoreQueryMovies}
              totalMovieResults={total_resultsQuery}
            />
          </div>
        )}
      </div>
      {error && <ErrorBox />}
    </>
  );
};
