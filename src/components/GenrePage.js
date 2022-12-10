import React from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';

function GenrePage() {
  const { genreName } = useParams();
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/${genreName}/movies?api_key=${REACT_APP_TMDB_API_KEY}`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, [genreName]);

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

export default GenrePage;
