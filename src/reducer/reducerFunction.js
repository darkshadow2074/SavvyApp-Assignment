import { FETCH_DATA, SEARCH_DATA, SORT_BY } from "./actionTypes.js";

export const postReducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        posts: [...action.payload],
      };
    }
    case SEARCH_DATA: {
      return {
        ...state,
        filters: { ...state.filters, search: action.payload },
      };
    }
    case SORT_BY: {
      return {
        ...state,
        filters: { ...state.filters, sortBy: action.payload },
      };
    }
    default: {
      return new Error("Error in reducer");
    }
  }
};
