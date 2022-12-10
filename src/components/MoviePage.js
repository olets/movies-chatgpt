import React from 'react';
import { useParams } from 'react-router-dom';
import ActorCard from './ActorCard';
import MovieCard from './MovieCard';

function MoviePage() {
  const { movieTitle } = useParams();
  const [movie, setMovie] = React.useState({});
  const [actors, setActors] = React.useState([]);
  const [relatedMovies, setRelatedMovies] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_API_KEY}&query=${movieTitle}`),
      // TODO these will need the API key too
      fetch(`https://api.themoviedb.org/3/movie/${movieTitle}/credits`),
      fetch(`https://api.themoviedb.org/3/movie/${movieTitle}/similar`)
    ])
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(([movieData, creditsData, relatedMoviesData]) => {
        setMovie(movieData.results[0]);
        setActors(creditsData.cast);
        setRelatedMovies(relatedMoviesData.results);
      });
  }, [movieTitle]);

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h1>{movie.title}</h1>
      <h2>Actors</h2>
      <div>
        {actors.map(actor => (
          <ActorCard
            key={actor.id}
            id={actor.id}
            name={actor.name}
            profilePath={actor.profile_path}
          />
        ))}
      </div>
      <h2>Related Movies</h2>
      <div>
        {relatedMovies.map(relatedMovie => (
          <MovieCard
            key={relatedMovie.id}
            id={relatedMovie.id}
            title={relatedMovie.title}
            posterPath={relatedMovie.poster_path}
            rating={relatedMovie.vote_average}
          />
        ))}
      </div>
    </div>
  );
}

export default MoviePage;
