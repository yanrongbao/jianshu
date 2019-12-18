import axios from 'axios';
import * as types from './actionTypes';
import { requireWriteList } from 'apis/pages/home';
const dispatchWriteList = (result, writePage, totalWritePage) => ({
    type: types.GET_WRITE_LIST,
    writeList: result,
    totalWritePage,
    writePage
});
export const getWriteList = (writePage) => {
    return dispatch => {
        requireWriteList().then(resp => {
            let result = resp.data.slice((writePage - 1) * 5, writePage * 5);
            let totalWritePage = Math.ceil(resp.data.length / 5);
            dispatch(dispatchWriteList(result, writePage, totalWritePage));
        })
    }
}
export const toggleTopShow = show => ({
    type: types.TOGGLE_SCROLL_SHOW,
    show
});
