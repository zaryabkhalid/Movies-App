import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux/es/exports"

import { fetchAsyncMovieorShowDetails } from "../features/searchItems/searchSlice"

const MovieDetail = () => {
  const { imdbID, Type } = useParams()
  const details = useSelector((state) => state.search.details)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncMovieorShowDetails(imdbID, Type))
    window.scroll(0, 0)
  }, [dispatch, imdbID, Type])

  return (
    <>
      <div className=" flex flex-col gap-6 md:flex-row md:w-[80%] mx-auto h-full py-20">
        {Object.keys(details).length === 0 ? (
          <div>
            <h1 className="text-white text-center text-3xl">Loading...</h1>
          </div>
        ) : (
          <>
            <div className=" md:w-3/4 p-5">
              <div className="mb-5">
                <h1 className="text-white text-4xl font-medium">
                  🌟{details.Title}
                </h1>
              </div>
              <div className="flex flex-col gap-4 mb-5 md:flex-row">
                <p className="text-font-secondary">
                  IMDB Rating ⭐: {details.imdbRating}
                </p>
                <p className="text-font-secondary">
                  IMDB Votes 👍 : {details.imdbVotes}
                </p>
                <p className="text-font-secondary">
                  Runtime 🕥 : {details.Runtime}
                </p>
                <p className="text-font-secondary">Year 📆 : {details.Year}</p>
                <p className="text-font-secondary">Type 🎥 : {details.Type}</p>
              </div>
              <div className="text-white mb-5">
                <p>{details.Plot}</p>
              </div>
              <div>
                <p className="text-white mb-2">
                  Director{" "}
                  <span className="text-font-secondary ml-2 md:ml-4">
                    {details.Director}
                  </span>
                </p>
                <p className="text-white mb-2">
                  Stars{" "}
                  <span className="text-font-secondary ml-2 md:ml-4">
                    {details.Actors}
                  </span>
                </p>
                <p className="text-white mb-2">
                  Genres{" "}
                  <span className="text-font-secondary ml-2 md:ml-4">
                    {details.Genre}
                  </span>
                </p>
                <p className="text-white mb-2">
                  Languages{" "}
                  <span className="text-font-secondary ml-2 md:ml-4">
                    {details.Language}
                  </span>
                </p>
                <p className="text-white mb-2">
                  Awards
                  <span className="text-font-secondary ml-2 md:ml-4">
                    {details.Awards}
                  </span>
                </p>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="h-[450px] ">
                <img
                  className="w-full h-full  shadow-xl"
                  src={details.Poster}
                  alt={details.Title}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default MovieDetail
