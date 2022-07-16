import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux/es/exports"
import { fetchAsyncMovies } from "../features/movies/movieSlice"
import { fetchAsyncSeries } from "../features/series/seriesSlice"

const Header = () => {
  const [searchText, setSearchText] = useState("")
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    if (searchText.length === 0) {
      alert("Enter the Search Text")
    } else {
      dispatch(fetchAsyncMovies(searchText))
      dispatch(fetchAsyncSeries(searchText))
      setSearchText("")
    }
  }

  return (
    <>
      <nav>
        <div className="py-10 px-10  bg-secondary-color flex flex-col gap-4 justify-between items-center lg:flex-row">
          <div>
            <Link to="/">
              <h1 className="text-white text-2xl font-sans font-medium">
                Movie App
              </h1>
            </Link>
          </div>
          <div>
            <form
              className="flex flex-col justify-center gap-1 max-w-[550px] md:flex-row"
              onSubmit={submitHandler}
            >
              <input
                className="text-md w-full p-2 pl-3 outline-none rounded-md shadow-lg"
                type="text"
                value={searchText}
                placeholder="Search for movies"
                onChange={(e) => setSearchText(e.target.value)}
              />

              <button
                type="submit"
                className="py-1 px-2 bg-font-secondary rounded-md shadow-lg"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
