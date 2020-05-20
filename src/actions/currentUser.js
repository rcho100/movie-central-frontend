export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const login = credentials => {
    console.log('credentials are', credentials)
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
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
