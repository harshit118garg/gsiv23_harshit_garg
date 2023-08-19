import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { discoverMovies, fetchSingleMovie, findMovies } from "../api/movieApi";
import { Movie } from "../types/types";

interface Response {
  page: number;
  results: Movie[];
}

export interface State {
  apiResponse: Response;
  singleMovie: any;
  apiQueryResponse: Response;
  error: boolean;
  loading: boolean;
}

const initialState: State = {
  apiResponse: {
    page: 1,
    results: [],
  },
  singleMovie: {},
  apiQueryResponse: {
    page: 1,
    results: [],
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
  async (_queryVal: string, { rejectWithValue }) => {
    try {
      console.log(` 🚀: Async Thunk for Fetch Movies based on user query`);
      const { data } = await findMovies(_queryVal);
      console.log("data for find Movie -> ", data);
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
          console.log("action in find Movies -> ", action.payload);
          state.loading = false;
          state.error = false;
          state.apiQueryResponse.results = [
            ...state.apiQueryResponse.results,
            ...action.payload.results,
          ];
          state.apiQueryResponse.page += 1;
        }
      )
      .addCase(findMoviesAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default moviesSlice.reducer;
