import { call, put, all, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import api from '~/services/api';
import mixpanel from '~/services/mixpanel';
import {
  loginUserSuccess,
  loginUserFail,
  logoutUserSuccess,
  logoutUserFail,
  resetPasswordSuccess,
  resetPasswordFail,
  resetPasswordConfirmSuccess,
  resetPasswordConfirmFail,
  getUserSuccess,
  getUserFail,
  changePasswordSuccess,
  changePasswordFail,
} from './actions';

import { companiesRequest } from '../company/actions';
import { getRetailsRequest } from '../retail/actions';

const identifyUserOnMixpanel = (loggedUser) => {
  mixpanel.identify(loggedUser.id);

  mixpanel.alias(loggedUser.email, loggedUser.id);

  mixpanel.people.set({
    $name: loggedUser.full_name,
    $email: loggedUser.email,
    $first_name: loggedUser.first_name,
    $last_name: loggedUser.last_name,
  });
};

const trackAccessWithCachedToken = (loggedUser) => {
  mixpanel.track('user-access', {
    Name: loggedUser.full_name,
    Email: loggedUser.email,
    'Accepted Terms': loggedUser.accept_terms_at,
  });
};

/**
 * Function to request Backend API login.
 *
 * @param {user email} username
 * @param {user password} password
 */
function* loginUserWithBackend({ username, password }) {
  try {
    const response = yield call(api.auth.login, username, password);

    yield put(loginUserSuccess(response.data));
    yield put(getRetailsRequest());
    yield put(companiesRequest());
    identifyUserOnMixpanel(response.data.user);
  } catch (error) {
    yield put(loginUserFail(error));
  }
}

/**
 * Function to request logout.
 */
export function* logoutRequest() {
  try {
    yield put(logoutUserSuccess());
    yield put(push('/login'));
  } catch (error) {
    yield put(logoutUserFail(error));
    yield put(push('/'));
  }
}

/**
 * Function to request logout.
 */
export function* resetPasswordRequest({ email }) {
  try {
    const response = yield call(api.auth.passwordReset, email);

    yield put(resetPasswordSuccess(response.data));
  } catch (error) {
    yield put(resetPasswordFail(error));
  }
}

/**
 * Function to request logout.
 */
export function* resetPasswordConfirmRequest({
  uid,
  token,
  newPassword,
  newPasswordConfirmation,
}) {
  try {
    const response = yield call(
      api.auth.passwordResetConfirm,
      uid,
      token,
      newPassword,
      newPasswordConfirmation
    );

    yield put(resetPasswordConfirmSuccess(response.data));
  } catch (error) {
    yield put(resetPasswordConfirmFail(error));
  }
}

/**
 * Function to request Backend API login.
 *
 * @param {user email} username
 * @param {user password} password
 */
function* getUserRequest({ token }) {
  try {
    const response = yield call(api.auth.getUser, token);

    yield put(getUserSuccess(response.data));
    yield put(getRetailsRequest());
    yield put(companiesRequest());
    identifyUserOnMixpanel(response.data);
    trackAccessWithCachedToken(response.data);
  } catch (error) {
    yield put(getUserFail(error));
    yield put(push('/login'));
  }
}

/**
 * Function to request password change.
 */
export function* changePasswordRequest({
  newPassword,
  newPasswordConfirmation,
  oldPassword,
}) {
  try {
    const response = yield call(
      api.auth.passwordChange,
      newPassword,
      newPasswordConfirmation,
      oldPassword
    );

    yield put(changePasswordSuccess(response.data));
  } catch (error) {
    yield put(changePasswordFail(error));
  }
}

export default all([
  takeLatest('@auth/LOGIN_REQUEST', loginUserWithBackend),
  takeLatest('@auth/LOGOUT_REQUEST', logoutRequest),
  takeLatest('@auth/CHANGE_PASSWORD_REQUEST', changePasswordRequest),
  takeLatest('@auth/RESET_PASSWORD_REQUEST', resetPasswordRequest),
  takeLatest(
    '@auth/RESET_PASSWORD_CONFIRM_REQUEST',
    resetPasswordConfirmRequest
  ),
  takeLatest('@auth/GET_USER_REQUEST', getUserRequest),
]);
