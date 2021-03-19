import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import RightActionsContainer from './RightActionsContainer';

const TopHeadContainer = () => {
  return (
    <div className="top__head_container">
      <BreadCrumbs />
      <RightActionsContainer />
    </div>
  );
};

export default TopHeadContainer;
