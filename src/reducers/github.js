const initialState = {
  githubData: [],
  loading: true,
};

const github = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GITHUB_DATA':
      return {
        ...state,
        githubData: [...state.githubData, ...action.payload],
        loading: false,
      };
    default:
      return state;
  }
};

export default github;
