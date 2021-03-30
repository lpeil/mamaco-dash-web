import produce from 'immer';

const initialState = {
  selectedPage: null,
  pages: [],
  appliedFilters: {},
  selectedFilters: {},
  dimension: '',
  selectedAdminPage: null,
  status: 'idle',
  initialFiltersValue: {}, // State to save the first state of applied filters
};

let pagesArray = []; // Aux array to store a copy of pages array, without change the current state

/**
 * Reducer to store page State.
 * @param {Object with the current requested page} selectedPage
 * @param {Array with the pages of the current company} pages
 * @param {Object with the selected filters of current page} filters
 * @param {String with the selected dimension of current page} dimension
 * @param {Object with the selected page in admin CRUD flow} selectedAdminPage
 * @param {String with the current status of page request} status
 */
export default function page(state = initialState, action) {
  switch (action.type) {
    // Event to create the pages array using the pages contained in company object.
    case '@company/SET_COMPANY':
      if (action.company.pages) {
        pagesArray = [...action.company.pages];
      }

      // if (action.company.name === 'Casa das Cuecas') {
      //   pagesArray = [
      //     ...pagesArray,
      //     {
      //       _id: 'upload_files',
      //       components: [],
      //       icon: 'folder-upload',
      //       id: 'upload_files',
      //       name: 'Atualização de Dados',
      //       order: 10,
      //     },
      //   ];
      // }

      return produce(state, (draft) => {
        draft.pages = pagesArray;
        draft.selectedPage = null;
        draft.appliedFilters = {};
        draft.selectedFilters = {};
        draft.dimension = '';
        draft.selectedAdminPage = null;
        draft.status = 'idle';
      });

    // Event to clear page filters
    case '@page/CLEAR_FILTERS':
      return produce(state, (draft) => {
        draft.appliedFilters = {
          ...state.initialFiltersValue,
        };
        draft.selectedFilters = {
          ...state.initialFiltersValue,
        };
      });

    // Event to apply selectedfilters to the page filters
    case '@page/APPLY_FILTERS':
      return produce(state, (draft) => {
        if (
          JSON.stringify(draft.appliedFilters) !==
          JSON.stringify(state.selectedFilters)
        ) {
          draft.appliedFilters = state.selectedFilters;
        }
      });

    // Event to update the selected filters when the filters components change
    case '@page/SET_SELECTED_FILTER':
      let { filterValue } = action;
      if (!filterValue) {
        filterValue = [];
      } else if (typeof filterValue === 'string') {
        filterValue = [filterValue];
      }
      return produce(state, (draft) => {
        draft.selectedFilters = {
          ...state.selectedFilters,
          [action.filterName]: filterValue,
        };
      });

    // Event to set initial filter
    case '@page/SET_INICIAL_FILTERS_VALUE':
      return produce(state, (draft) => {
        draft.initialFiltersValue = {
          ...state.initialFiltersValue,
          [action.key]: action.value,
        };
      });

    // Event to update the page dimension when the dimension component changes
    case '@page/SET_DIMENSION':
      return produce(state, (draft) => {
        draft.dimension = action.selectedDimension;
      });

    // Event to set the page selected in admin CRUD flow
    case '@page/SET_ADMIN_PAGE':
      return produce(state, (draft) => {
        draft.selectedAdminPage = action.page;
      });

    // Event to handle f5 events, to get the last company loaded in Local Storage, and create pages array
    case '@app/LOAD_UI':
      if (action.company.pages) {
        pagesArray = [...action.company.pages];
      }

      // if (action.company.name === 'Casa das Cuecas') {
      //   pagesArray.push({
      //     _id: 'upload_files',
      //     components: [],
      //     icon: 'folder-upload',
      //     id: 'upload_files',
      //     name: 'Atualização de Dados',
      //     order: 10,
      //   });
      // }

      return produce(state, (draft) => {
        draft.pages = pagesArray;
      });

    // Event to set the status of page request to success, and set in state the gotten page
    case '@page/GET_PAGE_SUCCESS':
      const dims = action.page.components.filter(
        (c) => c.componentType === 'dimension'
      );

      // create a object containing every filter on this page and set its vale to empty array.
      // then initialize appliedFilters, selectedFilters and initialFiltersValue with it
      const initialFiltersValues = action.page.components.reduce(
        (obj, component) => {
          if (component.componentType === 'filter') {
            obj[component.filters[0]] = [];
          }
          return obj;
        },
        {}
      );

      return produce(state, (draft) => {
        draft.appliedFilters = initialFiltersValues;
        draft.selectedFilters = initialFiltersValues;
        draft.initialFiltersValue = initialFiltersValues;
        draft.selectedPage = action.page;
        draft.dimension = dims && dims.length ? dims[0].dimensions[0] : '';
        draft.status = 'success';
      });

    // Event to set the status of page request to fail
    case '@page/GET_PAGE_FAIL':
      return produce(state, (draft) => {
        draft.status = 'fail';
      });

    // Event to set the status of page request to requesting
    case '@page/GET_PAGE_REQUEST':
      return produce(state, (draft) => {
        draft.status = 'requesting';
        draft.appliedFilters = {};
        draft.selectedFilters = {};
        draft.initialFiltersValue = {};
        draft.dimension = '';
        draft.selectedAdminPage = null;
      });

    // Clean states when user logout
    case '@auth/LOGOUT_SUCCESS':
      return initialState;

    default:
      return state;
  }
}
