import React from 'react';
import Container from 'react-bootstrap/Container';
import Poster from './Poster';

const Watchlist = ({ currentUser }) => {
  if (currentUser.user) {
    return (
      <Container className="movie-list">
        <h1>My Watchlist</h1>
        <div className="card-deck">
          {currentUser.watchlist.map((movie) => (
            <Poster
              movie={movie.attributes}
              id={movie.attributes.id_from_api}
              key={movie.attributes.title}
            />
          ))}
        </div>
      </Container>
    );
  }
  return <h2 className="loading">Loading...</h2>;
};

export default Watchlist;
