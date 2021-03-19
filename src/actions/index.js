import github from '../api/github';

export const getData = () => async (dispatch) => {
  const response = await github().get(
    '/repos/facebook/create-react-app/issues'
  );

  const { data } = response;

  dispatch({ type: 'GET_GITHUB_DATA', payload: data });
};

export const countIncrementer = (field) => {
  return {
    type: 'INCREMENT_COUNTER',
    field,
  };
};
