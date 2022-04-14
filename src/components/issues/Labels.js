import React from 'react';
import Chip from '@material-ui/core/Chip';

const Labels = ({ labels }) => {
  if (labels && labels.length === 0) {
    return null;
  }

  const renderColorStyle = (id) => {
    switch (id) {
      case 409579052:
        return 'secondary';
      case 1494610677:
        return 'primary';
      default:
        return 'default';
    }
  };
  return labels.map((item) => (
    <Chip
      key={item.node_id}
      style={{ marginLeft: '8px' }}
      label={item.name}
      color={renderColorStyle(item.id)}
      component="a"
      clickable
    />
  ));
};

export default Labels;
