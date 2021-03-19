import React from 'react';
import './navHeader.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

const NavHeader = () => {
  return (
    <div className="nav__container">
      <div className="nav__item__left">
        <MenuIcon fontSize="large" />
      </div>
      <div className="nav__item__center">
        <GitHubIcon fontSize="large" />
      </div>
      <div className="nav__item__right">
        <Badge color="primary" variant="dot">
          <NotificationsNoneOutlinedIcon />
        </Badge>
      </div>
    </div>
  );
};

export default NavHeader;
