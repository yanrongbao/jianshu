import { fromJS } from 'immutable';
import * as types from './actionTypes';
const loginState = fromJS({
    login: false,
    userInfo: {}
});

export default (state = loginState, action) => {
    switch (action.type) {
        case types.CHANGE_LOGIN:
            return state.set('userInfo', action.value.data[0]).set('login', action.value.success ? true : false);
        case types.LOGINOUT:
            return state.set('login', action.value);
        default:
            return state;
    }
};
