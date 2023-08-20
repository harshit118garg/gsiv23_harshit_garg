import React, { useEffect, useState } from "react";
import { TopNav } from "../../components/TopNav";
import { discoverMoviesAsync, findMoviesAsync } from "../../redux/slice";
import "./styles/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { Loader } from "../../subComps/Loader";
import { ErrorBox } from "../../subComps/ErrorBox";
import { ScreenBody } from "../../components/ScreenBody";

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

  const { page, results } = useSelector(
    (state: RootState) => state.getMovies.apiResponse
  );

  // fetch movies based on userQuery
  const fetchQueryMovies = (item: { query: string; pageNum: number }) => {
    dispatch(findMoviesAsync(item));
  };

  const { pageNum, queryResults } = useSelector(
    (state: RootState) => state.getMovies.apiQueryResponse
  );

  // load more latest movies on scroll
  const loadMoreLatestMovies = () => {
    fetchLatestMovies(page + 1);
  };

  // load more pages of movies based on userQuery
  const loadMoreQueryMovies = () => {
    let item = { query, pageNum: pageNum + 1 };
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
            />
          </div>
        )}
        {query !== "" && queryResults.length > 0 && (
          <div className="movies-list">
            <ScreenBody
              movies={queryResults}
              loadMoreMovies={loadMoreQueryMovies}
            />
          </div>
        )}
      </div>
      {error && <ErrorBox />}
    </>
  );
};
