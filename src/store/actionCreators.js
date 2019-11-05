import * as actions from './actions';


export const requestFetchTrail = (user) => ({
  type: actions.REQUEST_FETCH_TRAIL,
  user
});

export const confirmFetchTrail = ({id, user, queries}) => ({
  type: actions.CONFIRM_FETCH_TRAIL,
  id,
  user,
  queries
});

export const rejectFetchTrail = () => ({
  type: actions.REJECT_FETCH_TRAIL
});

export const clearTrail = () => ({
  type: actions.CLEAR_TRAIL
});



export const setActiveImage = (image) => ({
  type: actions.SET_ACTIVE_IMAGE,
  image
});

export const setSelectImage = (imageID) => ({
  type: actions.SET_SELECT_IMAGE,
  imageID
});




export const requestFetchRelatedTrails = (imageId) => ({
  type: actions.REQUEST_FETCH_RELATED_TRAILS,
  imageId
});

export const confirmFetchRelatedTrails = (trails) => ({
  type: actions.CONFIRM_FETCH_RELATED_TRAILS,
  trails
});
export const changeRelatedTrails = (trails) => ({
  type: actions.CHANGE_RELATED_TRAILS,
  trails
});
export const rejectFetchRelatdTrails = () => ({
  type: actions.REJECT_FETCH_RELATED_TRAILS
});

export const clearRelatedTrails = () => ({
  type: actions.CLEAR_RELATED_TRAILS
});

export const changeFilter = ()  =>({
  type: actions.CHANGE_FILTER,
  
});