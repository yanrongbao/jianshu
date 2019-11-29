import * as types from './actionTypes';
import axios from 'axios';
const changeLogin = result => ({
    type: types.CHANGE_LOGIN,
    value: result
});
export const loginOut = result => ({
    type: types.LOGINOUT,
    value: false
});
export const login = (name, password) => {
    return dispatch => {
        axios
            .post(
                '/apis/login', {
                name,
                password
            }
            )
            .then(resp => {
                const result = resp.data;
                if (result.code === 1) {
                    dispatch(changeLogin(result));
                } else {
                    alert(result.msg);
                }
            });
    };
};