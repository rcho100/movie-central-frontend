export const receiveMovieDetails = (movie) => {
    return {
        type: "RECEIVE_MOVIE_DETAILS",
        movie
    }
}

export const movieDetails = (id) => {
    return dispatch => {
        return fetch(`https://movie-central-backend.herokuapp.com/api/v1/movies/${id}`)
        .then(resp => resp.json())
        .then(details => {
            let genres = Array.from(details.genres, genre => genre.name)
            let movie = {details, genres}
            dispatch(receiveMovieDetails(movie))
        })
        .catch(error => console.log(error))
    }
}