import { fromJS } from 'immutable';
import * as types from './actionTypes';
const loginState = fromJS({
    login: false
});

export default (state = loginState, action) => {
    switch (action.type) {
        case types.CHANGE_LOGIN:
            return state.set('login', action.value);
        case types.LOGINOUT:
            return state.set('login', action.value);
        default:
            return state;
            break;
    }
};
