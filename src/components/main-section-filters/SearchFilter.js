import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    background: '#FAFBFC',
    width: '90%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 4,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchFilter = () => {
  const classes = useStyles();
  return (
    <div className="search__container">
      <Paper component="form" className={classes.root}>
        <Button endIcon={<ArrowDropDownOutlinedIcon />}>Filter</Button>

        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          // type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="is:issues:is:open"
          //inputProps={{ 'aria-label': 'search google maps' }}
        />
      </Paper>
    </div>
  );
};

export default SearchFilter;
