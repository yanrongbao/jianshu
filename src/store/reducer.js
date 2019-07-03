import { combineReducers } from 'redux';
import { reducer as headerRecducer } from '../component/header/store';

const reducer = combineReducers({
    header: headerRecducer
})
export default reducer;