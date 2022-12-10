import React from 'react';
import MovieCard from './MovieCard';

function PopularMovies() {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_TMDB_API_KEY}`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          rating={movie.vote_average}
        />
      ))}
    </div>
  );
}

export default PopularMovies;
