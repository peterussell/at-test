import { SELECT_VIEW } from '../actions/index';

export default function(state = "LAUNCHES_VIEW", action) {
  switch (action.type) {
    case SELECT_VIEW:
      return action.payload
  }
  return state;
}
