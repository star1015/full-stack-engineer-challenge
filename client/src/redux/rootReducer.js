import { combineReducers } from 'redux';
import spaceReducer from './space/reducer';

export default combineReducers({
  spaces: spaceReducer,
});
