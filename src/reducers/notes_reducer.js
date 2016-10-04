import {FETCH_NOTES} from '../actions/types';
const INITIAL_STATE = {all: [], note: null};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case FETCH_NOTES:
      return {...state, all: action.payload.data};
    default:
      return state;
  }
}