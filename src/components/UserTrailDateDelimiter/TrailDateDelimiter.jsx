import React from 'react';
import moment from 'moment';

import styles from './TrailDateDelimiter.module.scss';
import { DATE_FORMAT } from '../../constants';

const TrailDateDelimiter = ({
  date
}) => {
  let dateFormat = '';

  if (date === moment().format(DATE_FORMAT)) {
    dateFormat = 'Today';
  } else if (date === moment().subtract(1, 'days').format(DATE_FORMAT)) {
    dateFormat = 'Yesterday';
  } else {
    dateFormat = date;
  }

  return (
    <div className={styles.component}>
      {dateFormat}
    </div>
  );
}

export default TrailDateDelimiter;