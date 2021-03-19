import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    fontWeight: 'bold',
  },
  add_new: {
    background: '#2EA44F',
    color: '#fff',
  },
}));

const RightButtons = () => {
  const classes = useStyles();
  return (
    <div className="right__buttons_container">
      <div>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button
            className={classes.button}
            startIcon={<LoyaltyOutlinedIcon />}
          >
            Label <Chip size="small" label="30" />
          </Button>
          <Button
            className={classes.button}
            startIcon={<LoyaltyOutlinedIcon />}
          >
            Milestones <Chip size="small" label="6" />
          </Button>
        </ButtonGroup>
      </div>
      <div className="add_new_button">
        <Button className={classes.add_new} variant="contained">
          New
        </Button>
      </div>
    </div>
  );
};

export default RightButtons;
