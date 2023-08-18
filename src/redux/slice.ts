import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { discoverMovies } from "../api/movieApi";
import { Movie } from "../types/types";

interface Response {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface State {
  apiResponse: Response;
  error: boolean;
  loading: boolean;
}

const initialState: State = {
  apiResponse: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  error: false,
  loading: false,
};

export const discoverMoviesAsync = createAsyncThunk(
  "movies/fetchMovies",
  async () => {
    const resp = await discoverMovies();
    return resp.data;
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
      .addCase(discoverMoviesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.apiResponse = action.payload;
      })
      .addCase(discoverMoviesAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default moviesSlice.reducer;
