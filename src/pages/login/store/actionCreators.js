import * as types from './actionTypes';
import axios from 'axios';
import { Message } from 'utils/ui/index';
import { requireCheckUser } from 'apis/login';
const changeLogin = result => ({
    type: types.CHANGE_LOGIN,
    value: result
});
const changeCheckNameState = result => ({
    type: types.CHANGE_NAME_STATR,
    value: result.code === 1 ? true : false
})
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
                    const message = new Message();
                    message.show({
                        type: 'error',
                        text: result.msg,
                        duration: 2000,    // 设置0不会自动消失
                    });
                }
            });
    };
};

export const checkUser = (name) => {
    return dispatch => {
        requireCheckUser(name).then(resp => {
            const result = resp;
            const message = new Message();
            message.show({
                type: result.code === 1 ? 'success' : 'warn',
                text: result.msg,
                duration: 2000,    // 设置0不会自动消失
            });
            dispatch(changeCheckNameState(result))
        })
    }
}