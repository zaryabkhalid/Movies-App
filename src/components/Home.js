import React, { useEffect } from "react"
import MovieListing from "./MovieListing"
import { useDispatch } from "react-redux"
import { fetchAsyncMovies } from "../features/movies/movieSlice"
import { fetchAsyncSeries } from "../features/series/seriesSlice"

const Home = () => {
  const dispatch = useDispatch()
  const searchText = "Harry"
  useEffect(() => {
    dispatch(fetchAsyncMovies(searchText))
    dispatch(fetchAsyncSeries(searchText))
  }, [dispatch])
  return (
    <>
      <div>
        <MovieListing />
      </div>
    </>
  )
}

export default Home
