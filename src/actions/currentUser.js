export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type:'CLEAR_CURRENT_USER'
    }
}


export const login = credentials => {
    console.log('credentials are', credentials)
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
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
            }
        })
        .catch(error => console.log(error))
    }
}

export const signup = credentials => {
    console.log('credentials are', credentials)
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
            console.log(json)
            if (json.error) {
                alert(json.error)
            } else {
                dispatch(setCurrentUser(json.data))
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
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
            credentials: 'include'
        })
        .then(resp => resp.json())
        .then(user => { 
            if (user.notice) {
                alert(user.notice)
            } else {
                dispatch(setCurrentUser(user))
            }
        })
        .catch(error => console.log(error))
    }
}