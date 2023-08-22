import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../redux/slice";

export const store = configureStore({
  reducer: {
    getMovies: moviesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
