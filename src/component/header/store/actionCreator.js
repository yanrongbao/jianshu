import * as types from './actionsTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = data => ({
    type: types.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const input_focus_on = () => ({
    type: types.INPUT_FOCUS_ON
});

export const input_focus_off = () => ({
    type: types.INPUT_FOCUS_OFF
});

export const getList = () => {
    return dispatch => {
        axios
            .get('/api/headerList.json')
            .then(resp => {
                const data = resp.data;
                dispatch(changeList(data.data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};
export const mouse_enter = () => ({
    type: types.MOUSE_ENTER
});
export const mouse_leave = () => ({
    type: types.MOUSE_LEAVE
});
export const page_change = page => ({
    type: types.PAGE_CHANGE,
    page: page
});
