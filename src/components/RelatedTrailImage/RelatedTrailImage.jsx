import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreators';
import styles from './RelatedTrailImage.module.scss';

const RelatedTrailImage = ({
  image,
  activeImageId,
  toggleSelectImage
}) => {
  const isActive = image._id === activeImageId;
  const imageClasses = classnames(styles.component, {
    [styles.componentActive]: activeImageId === image._id
  });
  const element = [];
  element.push(
    <button type="button"
        onClick={() => toggleSelectImage(isActive ? null : image._id)}
        className={imageClasses}
        style={{
            backgroundImage: `url(${image.thumbSrc})`
        }}>
        <img src={image.thumbSrc} 
            alt={image.thumbSrc} 
        className={styles.image}/>
    </button>
  );
  return (
        element
  );
}

export default connect(
  state => ({
    activeImageId: state.ui.selectedImage
  }),
  dispatch => ({
    toggleSelectImage: (id) => dispatch(actionCreators.setSelectImage(id))
  })
)(RelatedTrailImage);