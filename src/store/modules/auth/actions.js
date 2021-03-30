/**
 * Action that dispatch event to get user when already have token
 */
export function getUserRequest(token) {
  return {
    type: '@auth/GET_USER_REQUEST',
    token,
  };
}

/**
 * Action that dispatch event to get user when already have token
 */
export function getUserSuccess(user) {
  return {
    type: '@auth/GET_USER_SUCCESS',
    user,
  };
}

/**
 * Action that dispatch event to get user when already have token
 */
export function getUserFail(error) {
  return {
    type: '@auth/GET_USER_FAIL',
    error,
  };
}

/**
 * Action that dispatch event to request Backend API login
 *
 * @param {User email} username
 * @param {User password} password
 */
export function loginUserRequest(username, password) {
  return {
    type: '@auth/LOGIN_REQUEST',
    username,
    password,
  };
}

/**
 * Action that dispatch event when Backend API login succeed
 *
 * @param {Login response containing API token and Backend user profile} loginResponse
 */
export function loginUserSuccess(loginResponse) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    loggedUser: loginResponse.user,
    token: loginResponse.token,
    expiresIn: loginResponse.expires_in,
  };
}

/**
 * Action that dispatch event when Backend API login fails
 *
 * @param {Error return from catch} error
 */
export function loginUserFail(error) {
  return {
    type: '@auth/LOGIN_FAIL',
    error,
  };
}

/**
 * Action that dispatch event to request logout
 */
export function logoutUserRequest() {
  return {
    type: '@auth/LOGOUT_REQUEST',
  };
}

/**
 * Action that dispatch event when logout succeed
 */
export function logoutUserSuccess() {
  return {
    type: '@auth/LOGOUT_SUCCESS',
  };
}

/**
 * Action that dispatch event when logout fails
 */
export function logoutUserFail() {
  return {
    type: '@auth/LOGOUT_FAIL',
  };
}

/**
 * Action that dispatch event to request reset password
 */
export function resetPasswordRequest(email) {
  return {
    type: '@auth/RESET_PASSWORD_REQUEST',
    email,
  };
}

/**
 * Action that dispatch event when reset password succeed
 */
export function resetPasswordSuccess() {
  return {
    type: '@auth/RESET_PASSWORD_SUCCESS',
  };
}

/**
 * Action that dispatch event when reset password fails
 */
export function resetPasswordFail() {
  return {
    type: '@auth/RESET_PASSWORD_FAIL',
  };
}

/**
 * Action that dispatch event to request change password
 */
export function resetPasswordConfirmRequest(
  uid,
  token,
  newPassword,
  newPasswordConfirmation
) {
  return {
    type: '@auth/RESET_PASSWORD_CONFIRM_REQUEST',
    uid,
    token,
    newPassword,
    newPasswordConfirmation,
  };
}

/**
 * Action that dispatch event when change password succeed
 */
export function resetPasswordConfirmSuccess() {
  return {
    type: '@auth/RESET_PASSWORD_CONFIRM_SUCCESS',
  };
}

/**
 * Action that dispatch event when change password fails
 */
export function resetPasswordConfirmFail(error) {
  return {
    type: '@auth/RESET_PASSWORD_CONFIRM_FAIL',
    error,
  };
}

/**
 * Action that dispatch event to request change password
 */
export function changePasswordRequest(
  newPassword,
  newPasswordConfirmation,
  oldPassword
) {
  return {
    type: '@auth/CHANGE_PASSWORD_REQUEST',
    newPassword,
    newPasswordConfirmation,
    oldPassword,
  };
}

/**
 * Action that dispatch event when change password succeed
 */
export function changePasswordSuccess() {
  return {
    type: '@auth/CHANGE_PASSWORD_SUCCESS',
  };
}

/**
 * Action that dispatch event when change password fails
 */
export function changePasswordFail(error) {
  return {
    type: '@auth/CHANGE_PASSWORD_FAIL',
    error,
  };
}
/**
 * Action that dispatch event when change password fails
 */
export function changePasswordReset() {
  return {
    type: '@auth/CHANGE_PASSWORD_RESET',
  };
}
/**
 * Action that dispatch event when accept terms of use
 */
export function acceptTerms() {
  return {
    type: '@auth/CHANGE_ACCEPT_TERMS',
  };
}
