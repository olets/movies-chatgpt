import React from 'react';
import { useParams } from 'react-router-dom';
import ActorCard from './ActorCard';
import MovieCard from './MovieCard';

function ActorPage() {
  const { actorName } = useParams();
  const [actor, setActor] = React.useState({});
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      fetch(`https://api.themoviedb.org/3/search/person?query=${actorName}`),
      fetch(`https://api.themoviedb.org/3/person/${actorName}/movie_credits`)
    ])
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(([actorData, moviesData]) => {
        setActor(actorData.results[0]);
        setMovies(moviesData.cast);
      });
  }, [actorName]);

  return (
    <div>
      <ActorCard
        id={actor.id}
        name={actor.name}
        profilePath={actor.profile_path}
      />
      <h2>Movies</h2>
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
    </div>
  );
}

export default ActorPage;
