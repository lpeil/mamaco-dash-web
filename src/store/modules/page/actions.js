/**
 * Action that dispatch event to set the page's filters
 */
export function applyFilters() {
  return {
    type: '@page/APPLY_FILTERS',
  };
}

/**
 * Action that dispatch event to clear the page's filters
 */
export function clearFilters() {
  return {
    type: '@page/CLEAR_FILTERS',
  };
}

/**
 * Action that dispatch event to set selected filter
 * @param {String with the selected filter name} filterName
 * @param {Array with the selected filter values} filterValue
 */
export function setSelectedFilter(filterName, filterValue) {
  return {
    type: '@page/SET_SELECTED_FILTER',
    filterName,
    filterValue,
  };
}

/**
 * Action that dispatch event to save the first selected filters state, with mono and auto selects
 * We use this state when the user reset filters, to apply the inicial state
 * @param {Object with the current selected filters} selectedFilters
 */
export function setInitialFilterValue(key, value) {
  return {
    type: '@page/SET_INICIAL_FILTERS_VALUE',
    key,
    value,
  };
}

/**
 * Action that dispatch event to set the page's dimension
 * @param {Object with the current selected dimension} selectedDimension
 */
export function setDimension(selectedDimension) {
  return {
    type: '@page/SET_DIMENSION',
    selectedDimension,
  };
}

/**
 * Action that dispatch event to set the selected page in admin CRUD flow
 * @param {Object with the page info} page
 */
export function setAdminPage(page) {
  return {
    type: '@page/SET_ADMIN_PAGE',
    page,
  };
}

/**
 * Action that dispatch event to request the page info using the passed id
 * @param {String with the page id} pageId
 */
export function getPageRequest(pageId) {
  return {
    type: '@page/GET_PAGE_REQUEST',
    pageId,
  };
}

/**
 * Action that dispatch event to communicate that the page request was successful,
 * and set the gotten page
 * @param {Object with the page info} page
 */
export function getPageSuccess(page) {
  return {
    type: '@page/GET_PAGE_SUCCESS',
    page,
  };
}

/**
 * Action that dispatch event to communicate that the page request was failed, and pass the error
 * @param {Error return from catch} error
 */
export function getPageFail(error) {
  return {
    type: '@page/GET_PAGE_FAIL',
    error,
  };
}
