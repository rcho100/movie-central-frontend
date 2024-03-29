import { resetLoginForm } from './loginForm';
import { resetSignupForm } from './signupForm';

export const setCurrentUser = (userInfo) => ({
  type: 'SET_CURRENT_USER',
  user: userInfo.data,
  watchlist: userInfo.included,
});

export const clearCurrentUser = () => ({
  type: 'CLEAR_CURRENT_USER',
});

export const login = (credentials, history) => (dispatch) => fetch('https://movie-central-backend.herokuapp.com/api/v1/login', {
  credentials: 'include',
  method: 'Post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(credentials),
})
  .then((resp) => resp.json())
  .then((userInfo) => {
    dispatch(resetLoginForm());
    if (userInfo.error) {
      alert(userInfo.error);
    } else {
      dispatch(setCurrentUser(userInfo));
      history.push('/');
    }
  })
  .catch((error) => console.log(error));

export const signup = (credentials, history) => {
  const userInfo = {
    user: credentials,
  };
  return (dispatch) => fetch('https://movie-central-backend.herokuapp.com/api/v1/signup', {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then((resp) => resp.json())
    .then((json) => {
      dispatch(resetSignupForm());
      if (json.error) {
        alert(json.error);
      } else {
        dispatch(setCurrentUser(json.data));
        history.push('/');
      }
    })
    .catch((error) => console.log(error));
};

export const logout = () => (dispatch) => {
  dispatch(clearCurrentUser());
  return fetch('https://movie-central-backend.herokuapp.com/api/v1/logout', {
    credentials: 'include',
    method: 'DELETE',
  })
    .then(alert('You are now logged out'));
};

export const getCurrentUser = () => (dispatch) => fetch('https://movie-central-backend.herokuapp.com/api/v1/get_current_user', {
  credentials: 'include',
})
  .then((resp) => resp.json())
  .then((user) => {
    if (!user.notice) {
      dispatch(setCurrentUser(user));
    }
  })
  .catch((error) => console.log(error));

// Current User's Watchlist
export const updateWatchlist = (userInfo) => ({
  type: 'UPDATE_WATCHLIST',
  watchlist: userInfo.included,
});

export const sendMovieToAdd = (movie, history) => (dispatch) => fetch('https://movie-central-backend.herokuapp.com/api/v1/add_movie', {
  credentials: 'include',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(movie),
})
  .then((resp) => resp.json())
  .then((userInfo) => {
    if (userInfo.not_logged_in) {
      alert(userInfo.not_logged_in);
    } else if (userInfo.already_in) {
      alert(userInfo.already_in);
    } else {
      dispatch(updateWatchlist(userInfo));
      history.push('/watchlist');
    }
  })
  .catch((error) => console.log(error));
