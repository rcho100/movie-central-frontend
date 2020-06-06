export const movies = (state = { popularMovies: [] }, action) => {
    switch (action.type) {
        case "RECEIVE_POP_MOVIES":
            return {...state, popularMovies: action.popMovies }
        default:
            return state
    }
}