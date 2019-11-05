import React from 'react';
import styles from './RelatedTrailQuery.module.scss';
import { connect } from 'react-redux';
import UserTrailImagesRow from '../UserTrailImagesRow/UserTrailImagesRow';
import RelatedTrailImageRow from '../RelatedTrailImageRow/RelatedTrailImageRow';

const RelatedTrailQuery = ({
  query,
  activeImageTrail
}) => {
  const nCols = 3;
  const nRows = Math.ceil(query.images.length / nCols);
  let imageRows = [];
  
  for (let i = 0; i < nRows; ++i) {
    imageRows = [...imageRows, query.images.slice(nCols*i, nCols*(i+1))];
  }

  var hasKey = false;
  const title = [];
  if(activeImageTrail!=null){
    const names = query.q.split(' ');
    const trailNames = activeImageTrail.split(' ');
    names.forEach((element) => {
    trailNames.forEach((trailName) => {
      if(element === trailName){
        hasKey  = true;
      }
    })
    
  });
  if(hasKey){
    title.push(<mark>{query.q}</mark>)
  } else {
    title.push(<p>{query.q}</p>)
  }
  }
  

  return (
    <div className={styles.component}>
      <div className={styles.header}>
        {/* <div className={styles.timestamp}>
          {moment(query.timestamp).format(TIME_FORMAT)}
        </div> */}

        <div className={styles.query}>
          {/* {query.q} */}
          {title}
        </div>
      </div>
      
      {imageRows.map((row, index) => 
        <RelatedTrailImageRow 
          images={row} 
          key={index}>
        </RelatedTrailImageRow>
      )}
    </div>
  );
};
export default connect(
  state => ({
    activeImageTrail: state.ui.activeImageTrail
  })
)(RelatedTrailQuery);