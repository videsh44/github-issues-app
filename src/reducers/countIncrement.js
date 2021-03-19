const initialState = {
  watchs: 0,
  stars: 0,
  forks: 0,
};

const countIncrement = (state = initialState, action) => {
  const { type, field } = action;
  switch (type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        [field]: state[field] + 1,
      };
    default:
      return state;
  }
};

export default countIncrement;
