import * as types from './actionTypes';
import { Message } from 'utils/ui/index';
import { requireLoginApi } from 'apis/pages/login';

const changeToLogout = isLogin => ({
    type: types.LOGINOUT,
    value: isLogin
});
export const changeLogin = userInfo => ({
    type: types.LOGIN,
    userInfo: userInfo
});
export const login = (name, password) => {
    return dispatch => {
        requireLoginApi(name, password).then(resp => {
            if (resp.success === true) {
                // data:[{
                // token: 'Bearer sdfafaef',
                // name:'aaaa'
                //avatar_url:'http:aaa'
                //}]
                const { data } = resp;
                dispatch(changeLogin(data));
                localStorage.setItem('TOKEN', data[0].token);//设置TOKEN
                localStorage.setItem('USERINFO', JSON.stringify(data[0]));//存储用户信息
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