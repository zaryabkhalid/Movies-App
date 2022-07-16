import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <>
      <div className="bg-secondary-color  transition-all cursor-pointer duration-[0.3s] transform hover:scale-105 hover:duration-550 shadow-lg min-h-[500px] h-full m-4">
        <Link to={`/movie/${data.imdbID}`}>
          <div>
            <div className="h-[500px]">
              <img
                className="w-full h-full"
                src={data.Poster}
                alt={data.Title}
              />
            </div>
            {/* card bottom */}
            <div className="p-[20px]">
              <div className="text-font-primary">
                <h4 className="text-lg font-medium truncate ">{data.Title}</h4>
                <div className="flex justify-between items-center mt-2">
                  <p>Year: {data.Year}</p>
                  <p>Type: {data.Type}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
