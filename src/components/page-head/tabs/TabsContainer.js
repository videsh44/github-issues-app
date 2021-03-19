import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Tab from '@material-ui/core/Tab';
import { Tabs, withStyles } from '@material-ui/core';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import DeviceHubOutlinedIcon from '@material-ui/icons/DeviceHubOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import ShowChartOutlinedIcon from '@material-ui/icons/ShowChartOutlined';

const TabsContainer = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      '&:hover': {
        borderBottom: '1px solid silver',
        opacity: 1,
      },
      '&$selected': {
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);

  const renderTabText = (IconName, txt, chipTxt) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          lineHeight: 1,
        }}
      >
        <div>
          <IconName />
        </div>
        <div> {txt}</div>
        {chipTxt && (
          <div>
            <Chip label={chipTxt} size="small" />
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <AntTabs
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
        variant="scrollable"
        scrollButtons="off"
      >
        <AntTab label={renderTabText(CodeOutlinedIcon, 'Code')} />
        <AntTab
          label={renderTabText(ErrorOutlineOutlinedIcon, 'Issues', '836')}
        />
        <AntTab
          label={renderTabText(DeviceHubOutlinedIcon, 'Pull Requests', '10')}
        />
        <AntTab label={renderTabText(ForumOutlinedIcon, 'Discussions')} />
        <AntTab
          label={renderTabText(PlayCircleOutlineOutlinedIcon, 'Actions')}
        />
        <AntTab
          label={renderTabText(AssessmentOutlinedIcon, 'Projects', '3')}
        />
        <AntTab label={renderTabText(SecurityOutlinedIcon, 'Security')} />
        <AntTab label={renderTabText(ShowChartOutlinedIcon, 'Insights')} />
      </AntTabs>
    </>
  );
};

export default TabsContainer;
