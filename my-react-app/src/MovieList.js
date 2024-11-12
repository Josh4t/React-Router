import React from 'react';
import MovieCard from './MovieCard';


const MovieList = () => (
  <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {movies.map(movie => (
      <MovieCard
        key={movie.title}
        title={movie.title}
        posterURL={movie.posterURL}
        rating={movie.rating}
      />
    ))}
  </div>
);

export default MovieList;
