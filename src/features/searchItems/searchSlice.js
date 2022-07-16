import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import movieApi from "../../apis/movieApi"

const initialState = {
  loading: false,
  details: {},
  error: "",
}

export const fetchAsyncMovieorShowDetails = createAsyncThunk(
  "search/fetchAsyncMovieorShowDetails",
  async (id, type) => {
    const response = await movieApi.get(
      `?apikey=${process.env.REACT_APP_API_KEY}&type=${type}&i=${id}&Plot=full`
    )
    return response.data
  }
)

export const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovieorShowDetails.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAsyncMovieorShowDetails.fulfilled, (state, action) => {
      state.loading = false
      state.details = action.payload
      state.error = ""
    })
    builder.addCase(fetchAsyncMovieorShowDetails.rejected, (state, action) => {
      state.loading = false
      state.details = {}
      state.error = action.error.message
    })
  },
})

export default searchSlice.reducer
export const { removeMovieorShowdetails } = searchSlice.actions
