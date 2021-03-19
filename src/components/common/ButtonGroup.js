import React from 'react';
import './button.css';

const ButtonGroup = ({ leftText, rightText, onRightButtonClick }) => {
  return (
    <div className="btn__group">
      <button className="left__button">{leftText}</button>
      <button onClick={onRightButtonClick} className="right__button">
        {rightText}
      </button>
    </div>
  );
};

export default ButtonGroup;
