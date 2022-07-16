import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import movieApi from "../../apis/movieApi"

const initialState = {
  loading: false,
  movies: {},
  allmovies: {},
  error: "",
}

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (searchText) => {
    const response = await movieApi.get(
      `?apikey=${process.env.REACT_APP_API_KEY}&s=${searchText}&type=movie`
    )
    return response.data
  }
)

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
      state.loading = false
      state.movies = action.payload
      state.error = ""
    })
    builder.addCase(fetchAsyncMovies.rejected, (state, action) => {
      state.loading = false
      state.movies = {}
      state.error = action.error.message
    })
  },
})

export default movieSlice.reducer
