import React from 'react';
import ForkActionButton from './action-buttons/ForkActionButton';
import StarActionButton from './action-buttons/StarActionButton';
import WatchActionButton from './action-buttons/WatchActionButton';

const RightActionsContainer = () => {
  return (
    <div className="right__action__container">
      <WatchActionButton />
      <StarActionButton />
      <ForkActionButton />
    </div>
  );
};

export default RightActionsContainer;
