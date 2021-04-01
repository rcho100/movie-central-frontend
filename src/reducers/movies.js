const movies = (state = { popularMovies: [], topRatedMovies: [] }, action) => {
  switch (action.type) {
    case 'RECEIVE_POP_MOVIES':
      return { ...state, popularMovies: action.popMovies };
    case 'RECEIVE_TOP_MOVIES':
      return { ...state, topRatedMovies: action.topMovies };
    default:
      return state;
  }
};

export default movies;
