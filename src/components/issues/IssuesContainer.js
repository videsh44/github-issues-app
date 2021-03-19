import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../actions';
import Issue from './Issue';
import TopFIltersHead from './TopFIltersHead';

const IssuesContainer = () => {
  const dispatch = useDispatch();
  const github = useSelector((state) => state.github);
  const [page, setPage] = useState(1);

  const limit = 30;

  const { githubData, loading } = github;

  useEffect(() => {
    if (loading) dispatch(getData(limit, page));

    // eslint-disable-next-line
  }, [loading]);

  const fetchData = () => {
    let temp_page = page + 1;
    setPage(temp_page);
    dispatch(getData(limit, temp_page));
  };

  return (
    <div>
      <div>
        <TopFIltersHead />
      </div>
      {githubData && githubData.length !== 0 ? (
        <InfiniteScroll
          dataLength={githubData.length} //This is important field to render the next data
          next={fetchData}
          hasMore={page < 36 ? true : false}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {githubData.map((item) => (
            <Issue key={item.id} {...item} />
          ))}
        </InfiniteScroll>
      ) : null}
    </div>
  );
};

export default IssuesContainer;
