// import { call, put, all, takeLatest } from 'redux-saga/effects';
// import { push } from 'connected-react-router';

// import api from '~/services/api';

// import { getUserToken } from './actions';
// import { getUserInfos } from './actions';

/**
 * Function to request Backend API login.
 *
 * @param {user email} username
 * @param {user password} password
//  */
// function* loginUserWithBackend({ username, password }) {
//   try {
//     const response = yield call(api.auth.login, username, password)

//     yield put(getUserToken(response.data))
//   } catch (error) {
//     yield put(loginUserFail(error));
//   }
// }

/**
 * Function to request logout.
 */
// export function* logoutRequest() {
//   try {
//     yield put(logoutUserSuccess());
//     yield put(push('/login'));
//   } catch (error) {
//     yield put(logoutUserFail(error));
//     yield put(push('/'));
//   }
// }

/**
 * Function to request Backend API login.
 *
 * @param {user email} username
 * @param {user password} password
 */
// function* getUserRequest({ token }) {
//   try {
//     const response = yield call(api.auth.getUser, token);

//     yield put(getUserInfos(response.data));

//     identifyUserOnMixpanel(response.data);
//     trackAccessWithCachedToken(response.data);
//   } catch (error) {
//     yield put(getUserFail(error));
//     yield put(push('/login'));
//   }
// }

/**
 * Function to request password change.
 */
// export function* changePasswordRequest({
//   newPassword,
//   newPasswordConfirmation,
//   oldPassword,
// }) {
//   try {
//     const response = yield call(
//       api.auth.passwordChange,
//       newPassword,
//       newPasswordConfirmation,
//       oldPassword,
//     );

//     yield put(changePasswordSuccess(response.data));
//   } catch (error) {
//     yield put(changePasswordFail(error));
//   }
// }

// export default all([
//   takeLatest('@auth/LOGIN_REQUEST', loginUserWithBackend),
//   takeLatest('@auth/LOGOUT_REQUEST', logoutRequest),
//   takeLatest('@auth/CHANGE_PASSWORD_REQUEST', changePasswordRequest),
//   takeLatest('@auth/RESET_PASSWORD_REQUEST', resetPasswordRequest),
//   takeLatest(
//     '@auth/RESET_PASSWORD_CONFIRM_REQUEST',
//     resetPasswordConfirmRequest,
//   ),
//   takeLatest('@auth/GET_USER_REQUEST', getUserRequest),
// ]);
