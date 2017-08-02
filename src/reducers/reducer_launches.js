import { FETCH_LAUNCHES } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_LAUNCHES:
      return action.payload.data.launches
  }
  return state;
}
