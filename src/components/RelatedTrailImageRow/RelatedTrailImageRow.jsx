import React from 'react';
import { connect } from 'react-redux';

import styles from './RelatedTrailImageRow.module.scss';

import RelatedTrailImage from '../RelatedTrailImage/RelatedTrailImage';
import RelatedTrailImagePreview from '../RelatedTrailImagePreview/RelatedTrailImagePreview';

const RelatedTrailImagesRow = ({
  images,
  activeImageId
}) => {
  const selectedImage = images.find(i => i._id === activeImageId);
  const selectedImageIndex = images.indexOf(selectedImage);

  return (
    <div>
      <div className={styles.images}>
        {images.map(i => 
          <RelatedTrailImage image={i} 
                      key={i._id}
                      index = {selectedImageIndex}
                      >
          </RelatedTrailImage>
        )}
      </div>
      
      {selectedImage
        ? <RelatedTrailImagePreview image={selectedImage}
                        index={selectedImageIndex}>
          </RelatedTrailImagePreview>
        : null
      }
    </div>
  );
}

export default connect(
  state => ({
    activeImageId: state.ui.selectedImage
  })
)(RelatedTrailImagesRow);