import { resetLoginForm } from './loginForm'
import { resetSignupForm } from './signupForm'

export const setCurrentUser = userInfo => {
    return {
        type: "SET_CURRENT_USER",
        user: userInfo.data,
        watchlist: userInfo.included
    }
}

export const clearCurrentUser = () => {
    return {
        type:'CLEAR_CURRENT_USER'
    }
}


export const login = (credentials, history) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            credentials: 'include',
            method: 'Post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(userInfo => {
            dispatch(resetLoginForm())
            if (userInfo.error) {
                alert(userInfo.error)
            } else {
                dispatch(setCurrentUser(userInfo))
                history.push('/')
            }
        })
        .catch(error => console.log(error))
    }
}

export const signup = (credentials, history) => {
    const userInfo = {
        user: credentials
    }
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/signup", {
            credentials: 'include',
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(resp => resp.json())
        .then(json => {
            dispatch(resetSignupForm())
            if (json.error) {
                alert(json.error)
            } else {
                dispatch(setCurrentUser(json.data))
                history.push('/')
            }
        })
        .catch(error => console.log(error))
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3001/api/v1/logout', {
            credentials: 'include',
            method: 'DELETE'
        })
        .then(alert('You are now logged out'))
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
            credentials: 'include'
        })
        .then(resp => resp.json())
        .then(user => { 
            if (!user.notice) {
                dispatch(setCurrentUser(user))
            }
        })
        .catch(error => console.log(error))
    }
}

// Current User's Watchlist
export const updateWatchlist = (userInfo) => {
    return {
        type: 'UPDATE_WATCHLIST',
        watchlist: userInfo.included
    }
}

export const sendMovieToAdd = (movie, history) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/add_movie", {
            credentials: 'include',
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie)
        })
        .then(resp => resp.json())
        .then(userInfo => {
            if (userInfo.already_in) {
                alert(userInfo.already_in)
            } else {
                dispatch(updateWatchlist(userInfo))
                history.push('/watchlist')
            }
        })
        .catch(error => console.log(error))
    }
}