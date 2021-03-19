import React from 'react';
import ButtonGroup from '../../../common/ButtonGroup';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { countIncrementer } from '../../../../actions';

const ForkActionButton = () => {
  const dispatch = useDispatch();
  const forks = useSelector((state) => state.countIncrement.forks);
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
          <StarBorderOutlinedIcon />
        </span>
        <span> Fork </span>
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
        {forks}
      </div>
    );
  };
  const onForkIncrement = () => {
    dispatch(countIncrementer('forks'));
  };

  return (
    <>
      <ButtonGroup
        leftText={renderLeft()}
        rightText={renderRight()}
        onRightButtonClick={onForkIncrement}
      />
    </>
  );
};

export default ForkActionButton;
