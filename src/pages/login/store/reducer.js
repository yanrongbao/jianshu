import { fromJS } from 'immutable';
import * as types from './actionTypes';
const loginState = fromJS({
    login: false,
    isNameRepeat: true
});

export default (state = loginState, action) => {
    switch (action.type) {
        case types.CHANGE_LOGIN:
            return state.set('login', action.value.code === 1 ? true : false);
        case types.LOGINOUT:
            return state.set('login', action.value);
        case types.CHANGE_NAME_STATR:
            return state.set('isNameRepeat', action.value)
        default:
            return state;
    }
};
