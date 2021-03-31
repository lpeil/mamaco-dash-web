export function getUserToken(token) {
  return {
    type: '@auth/SET_USER_TOKEN',
    token,
  };
}

export function getUserInfos(token) {
  return {
    type: '@auth/SET_USER_INFOS',
    token,
  };
}
