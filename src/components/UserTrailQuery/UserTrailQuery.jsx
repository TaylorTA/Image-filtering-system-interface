import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchRelatedTrails } from '../../store/effects';
import styles from './UserTrailQuery.module.scss';
import { TIME_FORMAT } from '../../constants';
import UserTrailImagesRow from '../UserTrailImagesRow/UserTrailImagesRow';

const UserTrailQuery = ({
  query,
  toggleSelectImage,
  filters
}) => {
  const nCols = 3;
  const nRows = Math.ceil(query.images.length / nCols);
  let imageRows = [];
  
  for (let i = 0; i < nRows; ++i) {
    imageRows = [...imageRows, query.images.slice(nCols*i, nCols*(i+1))];
  }

  var fakeImage = JSON.parse(JSON.stringify(query.images[0]));
  fakeImage._id = "000";

  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <div className={styles.timestamp}>
          {moment(query.timestamp).format(TIME_FORMAT)}
        </div>

        <div className={styles.query}>
          <button type="button"
            className={styles.query}
            onClick={() => toggleSelectImage(fakeImage,filters)}
            >{query.q}
          </button>
        </div>
      </div>
      
      {imageRows.map((row, index) => 
        <UserTrailImagesRow images={row} 
                        key={index}>
        </UserTrailImagesRow>
      )}
    </div>
  );
};

export default connect(
  state => ({
    activeImageId: state.ui.activeImageId,
    filters: state.relatedTrails.filters
  }),
  dispatch => ({
    toggleSelectImage: (id,filters) => dispatch(fetchRelatedTrails(id,filters))
  })
)(UserTrailQuery);