import React from 'react';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import Tab from '@material-ui/core/Tab';
import { Tabs, withStyles } from '@material-ui/core';

const TopFIltersHead = () => {
  const AntTabs = withStyles({
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '#F9826C',
    },
  })(Tabs);

  const AntTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);

  const renderTabText = (txt) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          lineHeight: 1,
        }}
      >
        <div> {txt}</div>
        <div>
          <ArrowDropDownOutlinedIcon />
        </div>
      </div>
    );
  };
  return (
    <AntTabs
      value={0}
      aria-label="disabled tabs example"
      variant="scrollable"
      scrollButtons="off"
    >
      <AntTab label={renderTabText('Author')} />
      <AntTab label={renderTabText('Label')} />
      <AntTab label={renderTabText('Projects')} />
      <AntTab label={renderTabText('Milestones')} />
      <AntTab label={renderTabText('Assigniee')} />
      <AntTab label={renderTabText('Sort')} />
    </AntTabs>
  );
};

export default TopFIltersHead;
