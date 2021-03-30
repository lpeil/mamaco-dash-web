/**
 * Action that dispatch event to Open Drawer
 */
export function openDrawer() {
  return {
    type: '@app/OPEN_DRAWER',
  };
}

/**
 * Action that dispatch event to Close Drawer
 */
export function closeDrawer() {
  return {
    type: '@app/CLOSE_DRAWER',
  };
}

/**
 * Action that dispatch event to invert Drawer state
 */
export function toggleDrawer() {
  return {
    type: '@app/TOGGLE_DRAWER',
  };
}

/**
 * Action that dispatch event to load UI state. Load company and pages.
 *
 * @param {Selected company} company
 */
export function loadUi(company) {
  return {
    type: '@app/LOAD_UI',
    company,
  };
}

/**
 * Action that dispatch event to Open PasswordChangeModal
 */
export function openPasswordChangeModal() {
  return {
    type: '@app/OPEN_PASSWORD_CHANGE_MODAL',
  };
}

/**
 * Action that dispatch event to Close PasswordChangeModal
 */
export function closePasswordChangeModal() {
  return {
    type: '@app/CLOSE_PASSWORD_CHANGE_MODAL',
  };
}

export const openSnackbar = (message, severity) => {
  return { type: '@app/OPEN_SNACKBAR', message, severity };
};

export const closeSnackbar = () => {
  return { type: '@app/CLOSE_SNACKBAR' };
};
