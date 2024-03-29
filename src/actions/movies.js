export const receivePopMovies = (popMovies) => ({
  type: 'RECEIVE_POP_MOVIES',
  popMovies,
});

export const popularMovies = () => (dispatch) => fetch('https://movie-central-backend.herokuapp.com/api/v1/popular')
  .then((resp) => resp.json())
  .then((popMovies) => {
    dispatch(receivePopMovies(popMovies));
  })
  .catch((error) => console.log(error));

export const receiveTopMovies = (topMovies) => ({
  type: 'RECEIVE_TOP_MOVIES',
  topMovies,
});

export const topRatedMovies = () => (dispatch) => fetch('https://movie-central-backend.herokuapp.com/api/v1/top_rated')
  .then((resp) => resp.json())
  .then((topMovies) => {
    dispatch(receiveTopMovies(topMovies));
  })
  .catch((error) => console.log(error));
