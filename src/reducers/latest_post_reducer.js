import { FETCH_LATEST, FETCH_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_LATEST:
    return { ...state, all: action.payload.data.items };
  case FETCH_POST:
    return { ...state, post: action.payload.data };
  default:
    return state;
  }
}
