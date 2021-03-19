import React from 'react';
import ButtonGroup from '../../../common/ButtonGroup';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { countIncrementer } from '../../../../actions';

const WatchActionButton = () => {
  const dispatch = useDispatch();
  const watchs = useSelector((state) => state.countIncrement.watchs);
  const renderLeft = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span style={{ marginRight: '2px' }}>
          <VisibilityOutlinedIcon />
        </span>
        <span> Watch </span>
        <ArrowDropDownOutlinedIcon />
      </div>
    );
  };

  const renderRight = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {watchs}
      </div>
    );
  };

  const onWatchIncrement = () => {
    dispatch(countIncrementer('watchs'));
  };

  return (
    <>
      <ButtonGroup
        leftText={renderLeft()}
        rightText={renderRight()}
        onRightButtonClick={onWatchIncrement}
      />
    </>
  );
};

export default WatchActionButton;
