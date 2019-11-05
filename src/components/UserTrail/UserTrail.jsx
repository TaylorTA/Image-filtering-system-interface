import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { DATE_FORMAT } from '../../constants';
import styles from './UserTrail.module.scss';

import UserTrailQuery from '../UserTrailQuery/UserTrailQuery';
import TrailDateDelimiter from '../UserTrailDateDelimiter/TrailDateDelimiter';

const UserTrail = ({
  queries
}) => {
  const elements = [];

  queries.forEach((query, index) => {
    const currentQueryDate = moment(query.timestamp).format(DATE_FORMAT);
    const previousQueryDate = index > 0 ? moment(queries[index - 1].timestamp).format(DATE_FORMAT) : null;

    if (currentQueryDate !== previousQueryDate) {
      elements.push(
        <TrailDateDelimiter key={query.timestamp} date={currentQueryDate}></TrailDateDelimiter>
      );
    }

    elements.push(
      <UserTrailQuery key={query.id} query={query}></UserTrailQuery>
    );
  });

  return (
    <div className={styles.component}>
      {elements}
    </div>
  );
}

export default connect(
  state => ({
    queries: state.trail.queries
  })
)(UserTrail);