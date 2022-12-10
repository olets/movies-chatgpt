import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

function MovieCard({ movie }) {
  const rating = movie.rating;
  const numFilledStars = Math.floor(rating / 2);
  const numHalfStars = rating % 2;
  const numEmptyStars = 5 - numFilledStars - numHalfStars;

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md">
      <img
        src={movie.imageUrl}
        className="w-full h-64 object-cover rounded-t-lg"
        alt={movie.title}
      />

      <div className="p-6 flex flex-col">

        <h3 className="font-bold text-xl mb-2">{movie.title}</h3>

        <div className="flex items-center mb-4">
          {Array(numFilledStars)
            .fill(0)
            .map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className="text-orange-500"
              />
            ))
          }
          {Array(numHalfStars)
            .fill(0)
            .map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStarHalfAlt}
                className="text-orange-500"
              />
            ))
          }
          {Array(numEmptyStars)
            .fill(0)
            .map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className="text-gray-300"
              />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieCard;