import React from "react"
import { useSelector } from "react-redux"
import MovieCard from "./MovieCard"
import Slider from "react-slick"
import { settings } from "../settings/reactSlickCrousalSettings"

const MovieListing = () => {
  const movies = useSelector((state) => state.movie.movies)
  const shows = useSelector((state) => state.series.shows)
  let rendereMovies,
    renderShows = ""

  rendereMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />
      })
    ) : (
      <div>
        <h2>{movies.Error}</h2>
      </div>
    )

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />
      })
    ) : (
      <div>
        <h2>{movies.Error}</h2>
      </div>
    )

  return (
    <>
      <div>
        <div className="my-12 px-8">
          <h2 className="text-font-secondary mb-[20px] font-medium text-2xl">
            Movies
          </h2>
          <div>
            <Slider {...settings}>{rendereMovies}</Slider>
          </div>
        </div>
        {/* Shows List */}
        <div className="my-12 px-8">
          <h2 className="text-font-secondary mb-[20px] font-medium text-2xl">
            Shows
          </h2>
          <div>
            <Slider {...settings}>{renderShows}</Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieListing
