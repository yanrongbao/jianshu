import { fromJS } from 'immutable';
import * as types from './actionTypes';
const loginState = fromJS({
    login: false,
    userInfo: {}
});

export default (state = loginState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return state.set('userInfo', action.userInfo[0]).set('login', true);
        case types.LOGINOUT:
            return state.set('login', action.value);
        default:
            return state;
    }
};
