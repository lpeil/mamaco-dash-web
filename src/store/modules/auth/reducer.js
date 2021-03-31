import produce from 'immer';

const initialState = {
  token: {},
  user: {},
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case '@user/SET_USER_TOKEN':
      return produce(state, (draft) => {
        draft.token = action.token;
      });

    case '@user/SET_USER_INFOS':
      return produce(state, (draft) => {
        draft.user = action.user;
      });

    default:
      return state;
  }
}
