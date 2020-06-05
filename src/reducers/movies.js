export const movies = (state = [], action) => {
    switch (action.type) {
        case "RECEIVE_POP_MOVIES":
            return action.popMovies
        default:
            return state
    }
}