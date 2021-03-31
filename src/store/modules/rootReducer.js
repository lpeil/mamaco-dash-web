// import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth/reducer';

export default (history) => ({
  auth,
  router: connectRouter(history),
});
