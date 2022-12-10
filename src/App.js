import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import PopularMovies from './PopularMovies';
import TopRatedMovies from './TopRatedMovies';
import GenrePage from './GenrePage';
import MoviePage from './MoviePage';
import ActorPage from './ActorPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Popular Movies</Link>
            </li>
            <li>
              <Link to='/top-rated'>Top Rated Movies</Link>
            </li>
            <li>
              <Link to='/genre/:genre-name'>Genre</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/' exact>
            <PopularMovies />
          </Route>
          <Route path='/top-rated'>
            <TopRatedMovies />
          </Route>
          <Route path='/genre/:genre-name'>
            <GenrePage />
          </Route>
          <Route path='/movie/:movie-title'>
            <MoviePage />
          </Route>
          <Route path='/actor/:actor-name'>
            <ActorPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
