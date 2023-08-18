import moviesReducer from "../redux/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: moviesReducer,
});

export type AppDispatch = typeof store.dispatch;
