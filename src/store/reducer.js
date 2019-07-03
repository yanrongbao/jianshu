import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../component/header/store';
const reducer = combineReducers({
    header: headerReducer
});
export default reducer;
