import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../actions';
import Issue from './Issue';
import TopFIltersHead from './TopFIltersHead';

const IssuesContainer = () => {
  const dispatch = useDispatch();
  const github = useSelector((state) => state.github);

  const { githubData, loading } = github;

  useEffect(() => {
    if (loading) dispatch(getData());

    // eslint-disable-next-line
  }, [loading]);

  return (
    <div>
      <div>
        <TopFIltersHead />
      </div>
      {githubData && githubData.length !== 0
        ? githubData.map((item) => <Issue key={item.id} {...item} />)
        : null}
    </div>
  );
};

export default IssuesContainer;
