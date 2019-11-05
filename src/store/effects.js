import * as actionCreators from './actionCreators';
// import * as api from '../api/server';
import * as api from '../api/mock';


export const fetchTrail = (id) => {
  return (dispatch) => {
    dispatch(actionCreators.requestFetchTrail(id));
    return api.getTrail(id)
      .then(response => {
          if (response.success) {
            dispatch(actionCreators.confirmFetchTrail(response.data.trail));
            localStorage['kaleidoscopeUser'] = response.data.trail.user;
          } else {
            console.error(`Cannot authenticate user ${id}. Message: ${response.data.message}`);
            dispatch(actionCreators.rejectFetchTrail());
            localStorage.removeItem('kaleidoscopeUser');
          }
        },
        () => {
          console.error('server error');
          dispatch(actionCreators.rejectFetchTrail());
          localStorage.removeItem('kaleidoscopeUser');
        }
      );
  };
};

export const logOut = () => {
  return (dispatch) => {
    localStorage.removeItem('kaleidoscopeUser');
    dispatch(actionCreators.clearTrail());
  }
}

export const fetchRelatedTrails = (image, filter) => {
  return dispatch => {
    dispatch(actionCreators.setActiveImage(image));
    if (image === null) {
      dispatch(actionCreators.clearRelatedTrails());
    } else {
      dispatch(actionCreators.requestFetchRelatedTrails(image._id));
      return api.getRelatedTrails(image.q,filter)
      .then(response => {
          if (response!=null) {
            dispatch(actionCreators.confirmFetchRelatedTrails(response));
            
            // localStorage['kaleidoscopeUser'] = response.data.trail.user;
          } else {
            //console.error(`Cannot authenticate user ${imageId}. Message: ${response.data.message}`);
            //dispatch(actionCreators.rejectFetchTrail());
            //localStorage.removeItem('kaleidoscopeUser');
          }
        },
        () => {
          console.error('server error');
          dispatch(actionCreators.rejectFetchTrail());
          localStorage.removeItem('kaleidoscopeUser');
        }
      );
    }
  }
}

export const changeFilterCold = (imageTrail,filters,currentDay,range) => {
  
  return dispatch =>  {
    filters.cold = !filters.cold;
    //dispatch(actionCreators.changeFilter());
      return api.getRelatedTrails(imageTrail,filters,currentDay,range)
      .then(response => {
          if (response!=null) {
            dispatch(actionCreators.confirmFetchRelatedTrails(response));
            
            // localStorage['kaleidoscopeUser'] = response.data.trail.user;
          } else {
            //console.error(`Cannot authenticate user ${imageId}. Message: ${response.data.message}`);
            //dispatch(actionCreators.rejectFetchTrail());
            //localStorage.removeItem('kaleidoscopeUser');
          }
        },
        () => {
          console.error('server error');
          dispatch(actionCreators.rejectFetchTrail());
          localStorage.removeItem('kaleidoscopeUser');
        }
      );
  }
}
export const changeFilterWarm = (imageTrail,filters,currentDay,range) => {
  
  return dispatch =>  {
    filters.warm = !filters.warm;
    //dispatch(actionCreators.changeFilter());
      return api.getRelatedTrails(imageTrail,filters,currentDay,range)
      .then(response => {
          if (response!=null) {
            dispatch(actionCreators.confirmFetchRelatedTrails(response));
            
            // localStorage['kaleidoscopeUser'] = response.data.trail.user;
          } else {
            //console.error(`Cannot authenticate user ${imageId}. Message: ${response.data.message}`);
            //dispatch(actionCreators.rejectFetchTrail());
            //localStorage.removeItem('kaleidoscopeUser');
          }
        },
        () => {
          console.error('server error');
          dispatch(actionCreators.rejectFetchTrail());
          localStorage.removeItem('kaleidoscopeUser');
        }
      );
  }
}

export const changeFilterDark = (imageTrail,filters,currentDay,range) => {
  
  return dispatch =>  {
    filters.dark = !filters.dark;
    //dispatch(actionCreators.changeFilter());
      return api.getRelatedTrails(imageTrail,filters,currentDay,range)
      .then(response => {
          if (response!=null) {
            dispatch(actionCreators.confirmFetchRelatedTrails(response));
            
            // localStorage['kaleidoscopeUser'] = response.data.trail.user;
          } else {
            //console.error(`Cannot authenticate user ${imageId}. Message: ${response.data.message}`);
            //dispatch(actionCreators.rejectFetchTrail());
            //localStorage.removeItem('kaleidoscopeUser');
          }
        },
        () => {
          console.error('server error');
          dispatch(actionCreators.rejectFetchTrail());
          localStorage.removeItem('kaleidoscopeUser');
        }
      );
  }
}
export const changeFilterBright = (imageTrail,filters,currentDay,range) => {
  
  return dispatch =>  {
    filters.bright = !filters.bright;
    //dispatch(actionCreators.changeFilter());
      return api.getRelatedTrails(imageTrail,filters,currentDay,range)
      .then(response => {
          if (response!=null) {
            dispatch(actionCreators.confirmFetchRelatedTrails(response));
            
            // localStorage['kaleidoscopeUser'] = response.data.trail.user;
          } else {
            //console.error(`Cannot authenticate user ${imageId}. Message: ${response.data.message}`);
            //dispatch(actionCreators.rejectFetchTrail());
            //localStorage.removeItem('kaleidoscopeUser');
          }
        },
        () => {
          console.error('server error');
          dispatch(actionCreators.rejectFetchTrail());
          localStorage.removeItem('kaleidoscopeUser');
        }
      );
  }
}

export const changeFilterText = (imageTrail,filters,currentDay,range) => {
  
  return dispatch =>  {
    filters.hasText = !filters.hasText;
      return api.getRelatedTrails(imageTrail,filters,currentDay,range)
      .then(response => {
          if (response!=null) {
            dispatch(actionCreators.confirmFetchRelatedTrails(response));
            
            // localStorage['kaleidoscopeUser'] = response.data.trail.user;
          } else {
            //console.error(`Cannot authenticate user ${imageId}. Message: ${response.data.message}`);
            //dispatch(actionCreators.rejectFetchTrail());
            //localStorage.removeItem('kaleidoscopeUser');
          }
        },
        () => {
          console.error('server error');
          dispatch(actionCreators.rejectFetchTrail());
          localStorage.removeItem('kaleidoscopeUser');
        }
      );
  }
}

export const changeFilterComplex = (imageTrail,filters,currentDay,range) => {
  
  return dispatch =>  {
    filters.complex = !filters.complex;
      return api.getRelatedTrails(imageTrail,filters,currentDay,range)
      .then(response => {
          if (response!=null) {
            dispatch(actionCreators.confirmFetchRelatedTrails(response));
            
            // localStorage['kaleidoscopeUser'] = response.data.trail.user;
          } else {
            //console.error(`Cannot authenticate user ${imageId}. Message: ${response.data.message}`);
            //dispatch(actionCreators.rejectFetchTrail());
            //localStorage.removeItem('kaleidoscopeUser');
          }
        },
        () => {
          console.error('server error');
          dispatch(actionCreators.rejectFetchTrail());
          localStorage.removeItem('kaleidoscopeUser');
        }
      );
  }
}

export const changeFilterSimple = (imageTrail,filters,currentDay,range) => {
  
  return dispatch =>  {
    filters.simple = !filters.simple;
      return api.getRelatedTrails(imageTrail,filters,currentDay,range)
      .then(response => {
          if (response!=null) {
            dispatch(actionCreators.confirmFetchRelatedTrails(response));
            
            // localStorage['kaleidoscopeUser'] = response.data.trail.user;
          } else {
            //console.error(`Cannot authenticate user ${imageId}. Message: ${response.data.message}`);
            //dispatch(actionCreators.rejectFetchTrail());
            //localStorage.removeItem('kaleidoscopeUser');
          }
        },
        () => {
          console.error('server error');
          dispatch(actionCreators.rejectFetchTrail());
          localStorage.removeItem('kaleidoscopeUser');
        }
      );
  }
}

export const changeFilterYear = (imageTrail,filters,currentDay,range) => {
  
  return dispatch =>  {
    filters.year = !filters.year;
      return api.getRelatedTrails(imageTrail,filters,currentDay,range)
      .then(response => {
          if (response!=null) {
            dispatch(actionCreators.confirmFetchRelatedTrails(response));
            
            // localStorage['kaleidoscopeUser'] = response.data.trail.user;
          } else {
            //console.error(`Cannot authenticate user ${imageId}. Message: ${response.data.message}`);
            //dispatch(actionCreators.rejectFetchTrail());
            //localStorage.removeItem('kaleidoscopeUser');
          }
        },
        () => {
          console.error('server error');
          dispatch(actionCreators.rejectFetchTrail());
          localStorage.removeItem('kaleidoscopeUser');
        }
      );
  }
}

export const changeFilterMonth = (imageTrail,filters,currentDay,range) => {
  
  return dispatch =>  {
    filters.month = !filters.month;
      return api.getRelatedTrails(imageTrail,filters,currentDay,range)
      .then(response => {
          if (response!=null) {
            dispatch(actionCreators.confirmFetchRelatedTrails(response));
            
            // localStorage['kaleidoscopeUser'] = response.data.trail.user;
          } else {
            //console.error(`Cannot authenticate user ${imageId}. Message: ${response.data.message}`);
            //dispatch(actionCreators.rejectFetchTrail());
            //localStorage.removeItem('kaleidoscopeUser');
          }
        },
        () => {
          console.error('server error');
          dispatch(actionCreators.rejectFetchTrail());
          localStorage.removeItem('kaleidoscopeUser');
        }
      );
  }
}

export const changeFilterDay = (imageTrail,filters,currentDay,range) => {
  
  return dispatch =>  {
    filters.day = !filters.day;
      return api.getRelatedTrails(imageTrail,filters,currentDay,range)
      .then(response => {
          if (response!=null) {
            dispatch(actionCreators.confirmFetchRelatedTrails(response));
            
            // localStorage['kaleidoscopeUser'] = response.data.trail.user;
          } else {
            //console.error(`Cannot authenticate user ${imageId}. Message: ${response.data.message}`);
            //dispatch(actionCreators.rejectFetchTrail());
            //localStorage.removeItem('kaleidoscopeUser');
          }
        },
        () => {
          console.error('server error');
          dispatch(actionCreators.rejectFetchTrail());
          localStorage.removeItem('kaleidoscopeUser');
        }
      );
  }
}

export const changeFollowedPerson = (relatedTrails,userName,imageTrail,filters,time,range) => {
  
  return dispatch =>  {
    relatedTrails.follow = userName;
      return api.getRelatedTrails(imageTrail,filters,time,range)
      .then(response => {
          if (response!=null) {
            dispatch(actionCreators.confirmFetchRelatedTrails(response));
            
            // localStorage['kaleidoscopeUser'] = response.data.trail.user;
          } else {
            //console.error(`Cannot authenticate user ${imageId}. Message: ${response.data.message}`);
            //dispatch(actionCreators.rejectFetchTrail());
            //localStorage.removeItem('kaleidoscopeUser');
          }
        },
        () => {
          console.error('server error');
          dispatch(actionCreators.rejectFetchTrail());
          localStorage.removeItem('kaleidoscopeUser');
        }
      );
  }
}

export const changeRangeBefore = (relatedTrails,imageTrail,filters,time,range,e) => {
  
  return dispatch =>  {
    range.before = e;
    relatedTrails.range.before = e;
    console.log(range);
      return api.getRelatedTrails(imageTrail,filters,time,range)
      .then(response => {
          if (response!=null) {
            dispatch(actionCreators.confirmFetchRelatedTrails(response));
            
            // localStorage['kaleidoscopeUser'] = response.data.trail.user;
          } else {
            //console.error(`Cannot authenticate user ${imageId}. Message: ${response.data.message}`);
            //dispatch(actionCreators.rejectFetchTrail());
            //localStorage.removeItem('kaleidoscopeUser');
          }
        },
        () => {
          console.error('server error');
          dispatch(actionCreators.rejectFetchTrail());
          localStorage.removeItem('kaleidoscopeUser');
        }
      );
  }
}

export const changeRangeAfter = (relatedTrails,imageTrail,filters,time,range,e) => {
  
  return dispatch =>  {
    range.after = e;
    relatedTrails.range.after = e;
    console.log(range);
      return api.getRelatedTrails(imageTrail,filters,time,range)
      .then(response => {
          if (response!=null) {
            dispatch(actionCreators.confirmFetchRelatedTrails(response));
            
            // localStorage['kaleidoscopeUser'] = response.data.trail.user;
          } else {
            //console.error(`Cannot authenticate user ${imageId}. Message: ${response.data.message}`);
            //dispatch(actionCreators.rejectFetchTrail());
            //localStorage.removeItem('kaleidoscopeUser');
          }
        },
        () => {
          console.error('server error');
          dispatch(actionCreators.rejectFetchTrail());
          localStorage.removeItem('kaleidoscopeUser');
        }
      );
  }
}