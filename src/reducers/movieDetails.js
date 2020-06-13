export const movieDetails = (state = {}, action) => {
    switch (action.type) {
        case "RECEIVE_MOVIE_DETAILS":
            return action.movie
        default:
            return state
    }
}