import React from 'react';
import RelatedTrailQuery from '../RelatedTrailQuery/RelatedTrailQuery'
import styles from './RelatedTrailFollowed.module.scss';

const RelatedTrailFollowed = ({ 
  trail
 }) => {
   const elements = [];
   const queries = trail.data.trail.queries;
   [...queries].forEach((query, index) => {
        elements.push(
          <RelatedTrailQuery key={query.id} query={query}></RelatedTrailQuery>
        );
   });
  return (
    <div className={styles.component}>
      <div className={styles.card}>
        <div className={styles.userName}>
            Followed Person:&nbsp;&nbsp;
          <mark>{trail.data.trail.user}</mark>
        </div>
        {elements}
      </div>
    </div>
  );
};

export default RelatedTrailFollowed;