import { 
  SET_ACTIVE_IMAGE,
  SET_SELECT_IMAGE
} from './actions';
import initialState from './initialState';

const uiReducer = (
  state = initialState.ui, 
  action
) => {
  switch (action.type) {
    case SET_ACTIVE_IMAGE:
      return {
        ...state,
        activeImageId: action.image._id,
        activeImageTrail: action.image.q,
        activeImage:action.image
      };
      case SET_SELECT_IMAGE:
      return {
        ...state,
        selectedImage: action.imageID
      };
    default:
      return state;
  }
};

export default uiReducer;