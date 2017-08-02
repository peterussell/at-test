import { FETCH_AGENCIES } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_AGENCIES:
      return action.payload.data.agencies
  }
  return state;
}
