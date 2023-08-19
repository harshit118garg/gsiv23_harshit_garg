import InfiniteScroll from "react-infinite-scroll-component";
import { MoviesList } from "../MoviesList";
import "./styles/index.scss";

interface ScreenBodyTypes {
  movies: any;
  loadMoreMovies: any;
}

export const ScreenBody = ({ movies, loadMoreMovies }: ScreenBodyTypes) => {
  // const [query, setQuery] = useState<string>("");

  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   setQuery(value);
  // };

  // const dispatch = useDispatch<AppDispatch>();
  // const results = useSelector(
  //   (state: RootState) => state.getMovies.apiResponse.results
  // );

  // const queryMovies = useSelector(
  //   (state: RootState) => state.getMovies.apiQueryResponse.queryResults
  // );
  // const { error, loading } = useSelector((state: RootState) => state.getMovies);

  // const fetchMovies = (pageNum: number) => {
  //   dispatch(discoverMoviesAsync(pageNum));
  // };

  // useEffect(() => {
  //   let timeOut = setTimeout(() => {
  //     query === "" ? fetchMovies(1) : dispatch(findMoviesAsync(query));
  //   }, 800);

  //   return () => clearTimeout(timeOut);
  // }, [dispatch, query]);

  // const loadMoreMovies = () => {
  //   fetchMovies(page + 1);
  // };

  // const page = useSelector(
  //   (state: RootState) => state.getMovies.apiResponse.page
  // );
  // const queryPageNum = useSelector(
  //   (state: RootState) => state.getMovies.apiQueryResponse.pageNum
  // );

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
