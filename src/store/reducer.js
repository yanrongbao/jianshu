import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from 'component/header/store';
import { reducer as homeReducer } from 'views/pages/home/store';
import { reducer as detailReducer } from 'views/pages/detail/store';
import { reducer as loginReducer } from 'views/pages/login/store';
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
});
export default reducer;
