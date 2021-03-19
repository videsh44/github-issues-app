import React from 'react';
import CardMembershipOutlinedIcon from '@material-ui/icons/CardMembershipOutlined';

import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    color: '#037de1',
    fontSize: '25px',
    cursor: 'pointer',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

const BreadCrumbs = () => {
  const classes = useStyles();
  return (
    <div className="breadcrumbs__container">
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" className={classes.link}>
          <CardMembershipOutlinedIcon className={classes.icon} />
          facebook
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          className={classes.link}
        >
          create-react-app
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
