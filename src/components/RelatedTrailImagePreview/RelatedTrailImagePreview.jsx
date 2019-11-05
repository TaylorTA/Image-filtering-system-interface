import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import styles from './RelatedTrailImagePreview.module.scss';

const RelatedTrailImagePreview = ({
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
        <img src={image.thumbSrc} 
            alt={image.thumbSrc}
            className={styles.image}/>
      </div>
    </div>
  )
}

export default connect()(RelatedTrailImagePreview);