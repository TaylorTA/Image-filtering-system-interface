import { 
  REQUEST_FETCH_TRAIL, 
  CONFIRM_FETCH_TRAIL,
  REJECT_FETCH_TRAIL,
  CLEAR_TRAIL
} from './actions';
import initialState from './initialState';

const trailReducer = (
  state = initialState.trail, 
  action
) => {
  switch (action.type) {
    case REQUEST_FETCH_TRAIL:
      return {
        ...state,
        isFetching: true
      };
    case CONFIRM_FETCH_TRAIL:
      return {
        ...state,
        isFetching: false,
        id: action.id,
        user: action.user,
        queries: action.queries
      };
    case REJECT_FETCH_TRAIL:
      return {
        ...state,
        isFetching: false
      };
    case CLEAR_TRAIL:
      return {
        ...initialState.trail
      };
    default:
      return state;
  }
};

export default trailReducer;