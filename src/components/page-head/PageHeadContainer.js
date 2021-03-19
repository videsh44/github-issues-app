import React from 'react';
import './pageHead.css';
import TabsContainer from './tabs/TabsContainer';
import TopHeadContainer from './top-head/TopHeadContainer';

const PageHeadContainer = () => {
  return (
    <div className="head__container">
      <TopHeadContainer />
      <TabsContainer />
    </div>
  );
};

export default PageHeadContainer;
