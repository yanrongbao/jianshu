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
export const login = (username, password) => {
    return dispatch => {
        axios
            .get(
                '/api/login.json?username=' + username + '&password=' + password
            )
            .then(resp => {
                const result = resp.data.data;
                if (result) {
                    dispatch(changeLogin(result));
                } else {
                    alert('登录失败');
                }
            });
    };
};