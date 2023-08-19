import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { discoverMovies } from "../api/movieApi";
import { Movie } from "../types/types";

interface Response {
  page: number;
  results: Movie[];
}

export interface State {
  apiResponse: Response;
  error: boolean;
  loading: boolean;
}

const initialState: State = {
  apiResponse: {
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
      const { data } = await discoverMovies(page);
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
      .addCase(discoverMoviesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.apiResponse.results.push(...action.payload.results);
        state.apiResponse.page += 1;
      })
      .addCase(discoverMoviesAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default moviesSlice.reducer;
