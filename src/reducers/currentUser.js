export default (state = {user: {}, watchlist: []}, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return {...state, user: action.user} 
        case "CLEAR_CURRENT_USER":
            return {user: {}, watchlist: []}
        case "ADD_TO_WATCHLIST":
            return {...state, watchlist: [...state.watchlist, action.movie]}
        default:
            return state
    }
}