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