import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movies/movieSlice";
import seriesReducer from "../features/series/seriesSlice";
import searchReducer from "../features/searchItems/searchSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    series: seriesReducer,
    search: searchReducer,
  },
});
