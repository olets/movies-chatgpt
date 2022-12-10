import React from 'react';
import { Link } from 'react-router-dom';

function ActorCard({ id, name, profilePath }) {
  return (
    <Link to={`/actor/${id}`}>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${profilePath}`} alt={name} />
        <h2>{name}</h2>
      </div>
    </Link>
  );
}

export default ActorCard;
