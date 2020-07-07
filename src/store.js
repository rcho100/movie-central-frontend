import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import { movies } from './reducers/movies'
import { movieDetails } from './reducers/movieDetails'
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    currentUser,
    loginForm,
    signupForm,
    movies,
    movieDetails
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

export default store