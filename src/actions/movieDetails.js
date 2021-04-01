export const receiveMovieDetails = (movie) => ({
  type: 'RECEIVE_MOVIE_DETAILS',
  movie,
});

export const movieDetails = (id) => (dispatch) => fetch(`https://movie-central-backend.herokuapp.com/api/v1/movies/${id}`)
  .then((resp) => resp.json())
  .then((details) => {
    const genres = Array.from(details.genres, (genre) => genre.name);
    const movie = { details, genres };
    dispatch(receiveMovieDetails(movie));
  })
  .catch((error) => console.log(error));
