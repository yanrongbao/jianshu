import * as types from './actionTypes';
import { Message } from 'utils/ui/index';
import { requireLoginApi } from 'apis/pages/login';
const changeLogin = result => ({
    type: types.CHANGE_LOGIN,
    value: result
});
const changeToLogout = isLogin => ({
    type: types.LOGINOUT,
    value: isLogin
});
export const login = (name, password) => {
    return dispatch => {
        requireLoginApi(name, password).then(resp => {
            if (resp.success === true) {
                dispatch(changeLogin(resp));
                localStorage.setItem('TOKEN', resp.data[0].token);
                localStorage.setItem('USERINFO', JSON.stringify(resp.data[0]));
            } else {
                const message = new Message();
                message.show({
                    type: 'error',
                    text: resp.msg,
                    duration: 2000,    // 设置0不会自动消失
                });
            }
        });
    };
};
export const logout = () => {
    return dispatch => {
        localStorage.removeItem('TOKEN');
        localStorage.removeItem('USERINFO');
        dispatch(changeToLogout(false));
    }
}