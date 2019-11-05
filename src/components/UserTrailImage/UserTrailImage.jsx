import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import styles from './UserTrailImage.module.scss';

import { fetchRelatedTrails } from '../../store/effects';

const UserTrailImage = ({
  image,
  activeImageId,
  toggleSelectImage,
  filters
}) => {
  const isActive = image._id === activeImageId;
  const imageClasses = classnames(styles.component, {
    [styles.componentActive]: activeImageId === image._id
  }); 

  return (
    <button type="button"
            //onClick={() => toggleSelectImage(isActive ? null : image,filters)}
            onClick={() => toggleSelectImage(image,filters)}
            className={imageClasses}
            style={{
              backgroundImage: `url(${image.thumbSrc})`
            }}>
      <img src={image.thumbSrc} 
           alt={image.src} 
           className={styles.image}/>
    </button>
  );
}

export default connect(
  state => ({
    activeImageId: state.ui.activeImageId,
    filters: state.relatedTrails.filters
  }),
  dispatch => ({
    toggleSelectImage: (id,filters) => dispatch(fetchRelatedTrails(id,filters))
  })
)(UserTrailImage);