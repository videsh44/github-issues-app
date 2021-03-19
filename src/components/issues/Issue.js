import React from 'react';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import Labels from './Labels';
import moment from 'moment';

const Issue = (props) => {
  const getDayAgo = (dt) => {
    let currentDate = new Date();
    let a = moment(currentDate, 'YYYY/MM/DD');
    let b = moment(dt, 'YYYY/MM/DD');
    let finalDate = a.diff(b, 'days');

    return finalDate;
  };

  return (
    <div className="issue">
      <div className="issue__icon material-icons">
        {props.state === 'open' ? (
          <ErrorOutlineOutlinedIcon color="error" />
        ) : (
          <CheckCircleOutlineOutlinedIcon color="secondary" />
        )}
      </div>
      <div className="issue__details">
        <div className="issue__details__title">
          <div className="issue__details__title--text">{props.title}</div>
          <Labels labels={props.labels} />
        </div>
        <div className="issue__details__meta">
          <div>#{props.number}</div>
          <div>opened {`${getDayAgo(props.updated_at)}`} ago by</div>
          {props.user && props.user.login ? (
            <div>{props.user.login}</div>
          ) : null}
        </div>
      </div>
      <div className="issue__assignees">
        {/* <Assignees {...props.assignees} /> */}
      </div>
      <div className="issue__comments">
        {props.comments > 0 ? (
          <div className="issue__comments__counter">
            <div className="material-icons">
              <ChatBubbleOutlineOutlinedIcon />
            </div>
            <div>{props.comments}</div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Issue;
