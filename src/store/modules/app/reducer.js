import produce from 'immer';

const initialState = {
  drawerOpen: true,
  passwordChangeModal: false,
  snackbar: {
    message: '',
    active: false,
    severity: 'success',
  },
};

/**
 * Reducer to store app State.
 *
 * @param {Controll drawer state} drawerOpen
 */
export default function app(state = initialState, action) {
  switch (action.type) {
    // Event to invert drawer state.
    case '@app/TOGGLE_DRAWER':
      return produce(state, (draft) => {
        draft.drawerOpen = !state.drawerOpen;
      });

    // Event to open drawer.
    case '@app/OPEN_DRAWER':
      return produce(state, (draft) => {
        draft.drawerOpen = true;
      });

    // Event to close drawer.
    case '@app/CLOSE_DRAWER':
      return produce(state, (draft) => {
        draft.drawerOpen = false;
      });

    // Event to open passwordChangeModal.
    case '@app/OPEN_PASSWORD_CHANGE_MODAL':
      return produce(state, (draft) => {
        draft.passwordChangeModal = true;
      });

    // Event to close passwordChangeModal.
    case '@app/CLOSE_PASSWORD_CHANGE_MODAL':
      return produce(state, (draft) => {
        draft.passwordChangeModal = false;
      });

    case '@app/OPEN_SNACKBAR':
      return produce(state, (draft) => {
        draft.snackbar = {
          active: true,
          message: action.message,
          severity: action.severity,
        };
      });

    case '@app/CLOSE_SNACKBAR':
      return produce(state, (draft) => {
        draft.snackbar = {
          ...state.snackbar,
          active: false,
        };
      });

    default:
      return state;
  }
}
