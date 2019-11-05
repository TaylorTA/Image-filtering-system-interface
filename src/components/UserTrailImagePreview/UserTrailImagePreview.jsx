import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import styles from './UserTrailImagePreview.module.scss';

const UserTrailImagePreview = ({
  image,
  index
}) => {
  const wrapperClasses = classnames(styles.imageWrapper, {
    [styles.imageWrapperArrowLeft]: index === 0,
    [styles.imageWrapperArrowCenter]: index === 1,
    [styles.imageWrapperArrowRight]: index === 2
  });

  return (
    <div className={styles.component}>
      <div className={wrapperClasses}>
          {/* <div className = {styles.name}>
              {image.features.label}
          </div> */}
        <img src={image.thumbSrc} 
            alt={image.thumbSrc}
            className={styles.image}/>
      </div>
    </div>
  )
}

export default connect()(UserTrailImagePreview);