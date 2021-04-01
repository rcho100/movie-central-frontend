export default (state = { user: {}, watchlist: [] }, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, user: action.user, watchlist: action.watchlist };
    case 'CLEAR_CURRENT_USER':
      return { user: {}, watchlist: [] };
    case 'UPDATE_WATCHLIST':
      return { ...state, watchlist: action.watchlist };
    default:
      return state;
  }
};
