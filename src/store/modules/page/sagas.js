import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { getPageFail, getPageSuccess } from './actions';
import { setCompanyByPage } from '../company/actions';
import { logoutUserRequest } from '../auth/actions';

/**
 * Function to request the page info, using the provided page id
 * @param {String with the id of the page that is being requested} pageId
 */
export function* getPage({ pageId }) {
  try {
    const response = yield call(api.page.get, pageId);
    yield put(setCompanyByPage(response.data));
    yield put(getPageSuccess(response.data));
  } catch (error) {
    if (
      error.response.data.detail === 'Invalid token' ||
      error.response.data.detail === 'Signature has expired.'
    ) {
      yield put(logoutUserRequest());
    } else {
      yield put(getPageFail(error));
    }
  }
}

export default all([takeLatest('@page/GET_PAGE_REQUEST', getPage)]);
