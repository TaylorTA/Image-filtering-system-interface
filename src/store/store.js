import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import trailReducer from './trailReducer';
import uiReducer from './uiReducer';
import relatedTrailsReducer from './relatedTrailsReducer';

const middleware = [ReduxThunk];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middleware.push(logger);
  console.log('adding logger');
}

const rootReducer = combineReducers({
  trail: trailReducer,
  ui: uiReducer,
  relatedTrails: relatedTrailsReducer
});

const configureStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
};

export default configureStore;