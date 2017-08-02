import { combineReducers } from 'redux';
import LaunchesReducer from './reducer_launches';
import AgenciesReducer from './reducer_agencies';
import SetFilterReducer from './reducer_set_filter';
import SelectViewReducer from './reducer_select_view';

const rootReducer = combineReducers({
  launches: LaunchesReducer,
  agencies: AgenciesReducer,
  filterTerm: SetFilterReducer,
  selectedView: SelectViewReducer
});

export default rootReducer;
