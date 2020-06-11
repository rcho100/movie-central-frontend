export const receiveMovieDetails = movieDetails => {
    return {
        type: "RECEIVE_MOVIE_DETAILS",
        movieDetails
    }
}

export const movieDetails = (id) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/movies/${id}`)
        .then(resp => resp.json())
        .then(movieDetails => {
            dispatch(receiveMovieDetails(movieDetails))
        })
        .catch(error => console.log(error))
    }
}