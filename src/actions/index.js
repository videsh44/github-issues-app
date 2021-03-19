import github from '../api/github';

export const getData = (per_page, page) => async (dispatch) => {
  const response = await github().get(
    '/repos/facebook/create-react-app/issues',
    {
      params: {
        per_page,
        page,
      },
    }
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
