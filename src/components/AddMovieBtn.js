import React from 'react';
import Button from 'react-bootstrap/Button';

const AddMovieBtn = ({ sendMovieToAdd, movieToAdd, history }) => (
  <Button onClick={() => sendMovieToAdd(movieToAdd, history)}>Add to Watchlist</Button>
);

export default AddMovieBtn;
