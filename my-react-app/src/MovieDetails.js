// src/MovieDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import movies from './movies'; // Adjust this import based on where your movie data is stored.

const MovieDetails = () => {
  const { title } = useParams();
  const movie = movies.find(m => m.title === title);

  return (
    <div className="container mx-auto p-6">
      {movie ? (
        <>
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="mb-4">{movie.description}</p>
          <iframe
            width="560"
            height="315"
            src={movie.trailerLink}
            title={`${movie.title} Trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="mt-4">
            <Link to="/" className="text-blue-500 hover:underline">
              Back to Home
            </Link>
          </div>
        </>
      ) : (
        <p>Movie not found.</p>
      )}
    </div>
  );
};

export default MovieDetails;
