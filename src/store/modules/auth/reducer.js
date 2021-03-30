import produce from 'immer';
import axios from '~/services/api/http';

const initialState = {
  authStatus: 'idle',
  resetPasswordStatus: 'idle',
  resetPasswordMessage: 'Solicitação concluída',
  resetPasswordError: null,
  resetConfirmPasswordError: null,
  resetConfirmPasswordStatus: 'idle',
  resetConfirmPasswordMessage: 'Solicitando a troca de senha',
  changeStatus: 'idle',
  changeMessage: 'Senha modificada',
  authMessage: 'Email ou senha incorretos',
  loggedUser: JSON.parse(localStorage.getItem('loggedUser')),
  isAuthenticated: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  changePasswordStatus: 'idle',
  changePasswordMessage: 'Solicitação concluída',
  changePasswordError: null,
};

/**
 * Reducer to store auth State.
 *
 * @param {Store backend authentication status} authStatus
 * @param {Store general authenticated status} isAuthenticated
 * @param {Store Backend API token} token
 * @param {Store Backend user} loggedUser
 */
export default function auth(state = initialState, action) {
  switch (action.type) {
    // Event when save profile succeed
    case '@user/SAVE_PROFILE_SUCCESS':
      return produce(state, (draft) => {
        draft.loggedUser.profile = action.profile;
      });

    // Event to request user when already have token
    case '@auth/GET_USER_REQUEST':
    case '@auth/LOGIN_REQUEST': // Event to set auth status when request login
      return produce(state, (draft) => {
        draft.authStatus = 'authenticating';
      });

    // Event to request user when already have token
    case '@auth/GET_USER_SUCCESS':
      axios.defaults.headers.common.Authorization = `JWT ${state.token}`;
      localStorage.setItem('loggedUser', JSON.stringify(action.user));

      return produce(state, (draft) => {
        draft.authStatus = 'authenticated';
        draft.loggedUser = action.user;
        draft.isAuthenticated = true;
      });

    // Event to request user when already have token
    case '@auth/GET_USER_FAIL':
      localStorage.removeItem('token');
      localStorage.removeItem('loggedUser');

      return produce(state, (draft) => {
        draft.loggedUser = null;
        draft.token = null;
        draft.isAuthenticated = false;
        draft.authStatus = 'fail';
        draft.authMessage = 'Sua sessão expirou, acesse sua conta novamente';
      });

    // Event to set backend user profile, user token and status to authenticated when backend authentication succeed
    // Store Backend token on localstorage
    // Set axios default Authorization to Bearer token
    case '@auth/LOGIN_SUCCESS':
      // EXPIRATION?!
      // EXPIRATION?!
      // EXPIRATION?!
      // EXPIRATION?!
      // EXPIRATION?!
      localStorage.setItem('token', action.token);
      localStorage.setItem('loggedUser', JSON.stringify(action.loggedUser));

      axios.defaults.headers.common.Authorization = `JWT ${action.token}`;

      return produce(state, (draft) => {
        draft.loggedUser = action.loggedUser;
        draft.token = action.token;
        draft.authStatus = 'authenticated';
        draft.authMessage = 'Login efetuado com sucesso';
        draft.isAuthenticated = true;
      });

    // Event to status to fail when backend authentication fails
    case '@auth/LOGIN_FAIL':
      localStorage.removeItem('token');
      localStorage.removeItem('loggedUser');
      return produce(state, (draft) => {
        draft.loggedUser = null;
        draft.token = null;
        draft.isAuthenticated = false;
        draft.authStatus = 'fail';
        draft.authMessage = 'Email ou senha incorretos';
      });

    // Event to status to fail when backend authentication fails
    case '@auth/LOGOUT_SUCCESS':
      localStorage.removeItem('token');
      localStorage.removeItem('loggedUser');
      return produce(state, (draft) => {
        draft.authStatus = 'idle';
        draft.loggedUser = null;
        draft.token = null;
        draft.isAuthenticated = false;
      });

    // Event to set reset password status to requesting
    case '@auth/RESET_PASSWORD_REQUEST':
      return produce(state, (draft) => {
        draft.resetPasswordStatus = 'requesting';
        draft.resetPasswordError = null;
        draft.resetPasswordMessage = 'Solicitando a troca de senha';
      });

    // Event to set reset password status to success
    case '@auth/RESET_PASSWORD_SUCCESS':
      return produce(state, (draft) => {
        draft.resetPasswordStatus = 'success';
        draft.resetPasswordError = null;
        draft.resetPasswordMessage = 'Solicitação enviada, verifique email';
      });

    // Event to set reset password status to fail
    case '@auth/RESET_PASSWORD_FAIL':
      return produce(state, (draft) => {
        draft.resetPasswordStatus = 'fail';
        draft.resetPasswordError = action.error.response.data;
        draft.resetPasswordMessage = 'Não foi possível enviar a troca de senha';
      });

    // Event to set change password status to requesting
    case '@auth/RESET_PASSWORD_CONFIRM_REQUEST':
      return produce(state, (draft) => {
        draft.resetConfirmPasswordStatus = 'requesting';
        draft.resetConfirmPasswordError = null;
        draft.resetConfirmPasswordMessage = 'Solicitando a troca de senha';
      });

    // Event to set change password status to success
    case '@auth/RESET_PASSWORD_CONFIRM_SUCCESS':
      return produce(state, (draft) => {
        draft.resetConfirmPasswordStatus = 'success';
        draft.resetConfirmPasswordError = null;
        draft.resetConfirmPasswordMessage = 'Senha modificada';
      });

    // Event to set change password status to fail
    case '@auth/RESET_PASSWORD_CONFIRM_FAIL':
      return produce(state, (draft) => {
        draft.resetConfirmPasswordStatus = 'fail';
        draft.resetConfirmPasswordError = action.error.response.data;
        draft.resetConfirmPasswordMessage = 'Não foi possível trocar de senha';
      });

    // Event to set reset password status to requesting
    case '@auth/CHANGE_PASSWORD_REQUEST':
      return produce(state, (draft) => {
        draft.changePasswordStatus = 'requesting';
        draft.changePasswordMessage = 'Solicitando a troca de senha';
      });

    // Event to set reset password status to success
    case '@auth/CHANGE_PASSWORD_SUCCESS':
      return produce(state, (draft) => {
        draft.changePasswordStatus = 'success';
        draft.changePasswordMessage = 'Senha alterada';
      });

    // Event to set reset password status to fail
    case '@auth/CHANGE_PASSWORD_FAIL':
      return produce(state, (draft) => {
        draft.changePasswordStatus = 'fail';
        draft.changePasswordError = action.error.response.data;
        draft.changePasswordMessage =
          'Não foi possível solicitar a troca de senha';
      });

    // Event to set reset password status to fail
    case '@auth/CHANGE_PASSWORD_RESET':
      return produce(state, (draft) => {
        draft.changePasswordStatus = 'idle';
        draft.changePasswordError = null;
        draft.changePasswordMessage = 'Solicitação concluída';
      });

    // Event to set reset password status to fail
    case '@auth/CHANGE_ACCEPT_TERMS':
      return produce(state, (draft) => {
        draft.loggedUser.accept_terms_at = true;
      });

    case '@user/SIGNUP_SUCCESS':
      localStorage.setItem('token', action.token);
      localStorage.setItem('loggedUser', JSON.stringify(action.user));

      axios.defaults.headers.common.Authorization = `JWT ${action.token}`;

      return produce(state, (draft) => {
        draft.loggedUser = action.user;
        draft.token = action.token;
        draft.authStatus = 'authenticated';
        draft.authMessage = 'Login efetuado com sucesso';
        draft.isAuthenticated = true;
      });

    default:
      return state;
  }
}
