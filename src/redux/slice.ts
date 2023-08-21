import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { discoverMovies, fetchSingleMovie, findMovies } from "../api/movieApi";
import { Movie, SingleMovieInfo } from "../types/types";
import { stat } from "fs";

interface Response {
  page: number;
  results: Movie[];
  total_results: number;
}

interface QueryReponse {
  pageNum: number;
  queryResults: Movie[];
  total_resultsQuery: number;
}

export interface State {
  apiResponse: Response;
  singleMovie: SingleMovieInfo;
  apiQueryResponse: QueryReponse;
  error: boolean;
  loading: boolean;
}

const initialState: State = {
  apiResponse: {
    page: 1,
    results: [],
    total_results: 0,
  },
  singleMovie: {},
  apiQueryResponse: {
    pageNum: 1,
    queryResults: [],
    total_resultsQuery: 0,
  },
  error: false,
  loading: false,
};

export const discoverMoviesAsync = createAsyncThunk(
  "movies/fetchMovies",
  async (page: number, { rejectWithValue }) => {
    try {
      console.log(` 🚀: Async Thunk for discovering all latest movies`);
      const { data } = await discoverMovies(page);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchAMovieAsync: any = createAsyncThunk(
  "movies/singleMovie",
  async (_id: number, { rejectWithValue }) => {
    try {
      console.log(` 🚀: Async Thunk for Fetch Single Movie`);
      const { data } = await fetchSingleMovie(_id);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const findMoviesAsync: any = createAsyncThunk(
  "movies/findMovie",
  async (item: { query: string; pageNum: number }, { rejectWithValue }) => {
    try {
      console.log(` 🚀: Async Thunk for Fetch Movies based on user query`);
      const { data } = await findMovies(item);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(discoverMoviesAsync.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        discoverMoviesAsync.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = false;
          state.apiResponse.results = [
            ...state.apiResponse.results,
            ...action.payload.results,
          ];
          state.apiResponse.page += 1;
          state.apiResponse.total_results = action.payload.total_results;
        }
      )
      .addCase(discoverMoviesAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchAMovieAsync.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.singleMovie = {};
      })
      .addCase(
        fetchAMovieAsync.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = false;
          state.singleMovie = action.payload;
        }
      )
      .addCase(fetchAMovieAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(findMoviesAsync.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        findMoviesAsync.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = false;
          state.apiQueryResponse.queryResults = [
            ...state.apiQueryResponse.queryResults,
            ...action.payload.results,
          ];
          state.apiQueryResponse.pageNum += 1;
          state.apiQueryResponse.total_resultsQuery = action.payload.total_results
        }
      )
      .addCase(findMoviesAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default moviesSlice.reducer;
