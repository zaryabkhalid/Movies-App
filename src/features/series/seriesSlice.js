import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import movieApi from "../../apis/movieApi"

const initialState = {
  loading: false,
  shows: {},
  error: "",
}

export const fetchAsyncSeries = createAsyncThunk(
  "series/fetchAsyncSeries",
  async (searchText) => {
    const response = await movieApi.get(
      `?apikey=${process.env.REACT_APP_API_KEY}&s=${searchText}&type=series`
    )
    return response.data
  }
)

export const seriesSlice = createSlice({
  name: "series",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncSeries.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAsyncSeries.fulfilled, (state, action) => {
      state.loading = false
      state.shows = action.payload
      state.error = ""
    })
    builder.addCase(fetchAsyncSeries.rejected, (state, action) => {
      state.loading = false
      state.shows = {}
      state.error = action.error.message
    })
  },
})

export default seriesSlice.reducer
