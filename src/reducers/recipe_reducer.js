import * as types from '../actions/types';

const initialState = {
  status: 'IDLE',
  recipes: [],
};

export default function searchRecipes(state = initialState, action) {
  switch (action.type) {
  case types.SEARCH_DONE:
    return {
      ...state,
      recipes: [...state.photos, ...action.photos],
      status: 'DONE',
      keyword: action.keyword,
    };
  case types.SEARCH_PENDING:
    return {
      ...state,
      recipes: [],
      status: 'PENDING',
    };
  default:
    return state;
  }
}
