import React from 'react';
import ButtonGroup from '../../../common/ButtonGroup';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { countIncrementer } from '../../../../actions';

const StarActionButton = () => {
  const dispatch = useDispatch();
  const stars = useSelector((state) => state.countIncrement.stars);
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
        <span> Star </span>
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
        {stars}
      </div>
    );
  };

  const onStarIncrement = () => {
    dispatch(countIncrementer('stars'));
  };

  return (
    <>
      <ButtonGroup
        leftText={renderLeft()}
        rightText={renderRight()}
        onRightButtonClick={onStarIncrement}
      />
    </>
  );
};

export default StarActionButton;
