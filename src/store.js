import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import users from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import thunk from 'redux-thunk';


const reducer = combineReducers({
    users,
    currentUser,
    loginForm,
    signupForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store