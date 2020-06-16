export default (state = {}, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return action.user
        case "CLEAR_CURRENT_USER":
            return {}
        default:
            return state
    }
}