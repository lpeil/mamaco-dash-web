import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from './app/reducer';
import auth from './auth/reducer';
import page from './page/reducer';

export default (history) =>
  combineReducers({
    app,
    auth,
    page,
    router: connectRouter(history),
  });
