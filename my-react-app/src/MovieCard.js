import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, posterURL, rating }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <img src={posterURL} alt={title} className="w-full h-64 object-cover rounded-md mb-4" />
    <h2 className="text-xl font-semibold">{title}</h2>
    <p>Rating: {rating}</p>
    <Link to={`/movie/${title}`} className="text-blue-500 hover:underline mt-2 block">
      View Details
    </Link>
  </div>
);

export default MovieCard;
