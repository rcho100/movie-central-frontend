export const receivePopMovies = popMovies => {
    return {
        type: "RECEIVE_POP_MOVIES",
        popMovies
    }
}

export const popularMovies = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/popular")
        .then(resp => resp.json())
        .then(popMovies => {
            dispatch(receivePopMovies(popMovies))
        })
        .catch(error => console.log(error))
    }
}

export const receiveTopMovies = topMovies => {
    return {
        type: "RECEIVE_TOP_MOVIES",
        topMovies
    }
}

export const topRatedMovies = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/top_rated")
        .then(resp => resp.json())
        .then(topMovies => {
            dispatch(receiveTopMovies(topMovies))
        })
        .catch(error => console.log(error))
    }
}