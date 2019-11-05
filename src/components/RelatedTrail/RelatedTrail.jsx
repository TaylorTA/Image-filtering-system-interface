import React from 'react';
import RelatedTrailQuery from '../RelatedTrailQuery/RelatedTrailQuery'
import styles from './RelatedTrail.module.scss';
import { connect } from 'react-redux';
import {changeFollowedPerson} from '../../store/effects';

const RelatedTrail = ({ 
  trail,
  relatedTrails,
  changeFollowedPerson,
  image,
  filters,
  range,
  time
 }) => {
   const elements = [];
   const queries = trail.data.trail.queries;
   //const currentQueryDate = moment(trail.timestamp).format(DATE_FORMAT);
   [...queries].forEach((query, index) => {
      // const currentQueryDate = moment(query.timestamp).format(DATE_FORMAT);
      // const previousQueryDate = index > 0 ? moment(queries[index - 1].timestamp).format(DATE_FORMAT) : null;
      // // if (currentQueryDate !== previousQueryDate) {
      // //   elements.push(
      // //     <TrailDateDelimiter key={query.timestamp} date={currentQueryDate}></TrailDateDelimiter>
      // //   );
      // // }
        elements.push(
          <RelatedTrailQuery key={query.id} query={query}></RelatedTrailQuery>
        );
   });
  return (
    <div className={styles.component}>
      <div className={styles.card}>
        <div className={styles.userName}>
          {trail.data.trail.user}
          <button type="button"
            onClick={() => changeFollowedPerson(relatedTrails,trail.data.trail.user,image,filters,time,range)}
            className={styles.roundButton}
            // style={{
            //   backgroundImage: `url(${'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png'})`
            // }}
            >
      <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png'} 
           alt={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png'} 
           className={styles.image}
           />
          </button>
        </div>
        {elements}
      </div>
    </div>
  );
};

export default connect(
  state => ({
    relatedTrails: state.relatedTrails,
    image: state.ui.activeImageTrail,
    filters: state.relatedTrails.filters,
    time: state.trail.time,
    range: state.relatedTrails.range
  }),
  dispatch => ({
    changeFollowedPerson: (relatedTrails,userName,image,filters,time,range) => dispatch(changeFollowedPerson(relatedTrails,userName,image,filters,time,range))
  })
)(RelatedTrail);