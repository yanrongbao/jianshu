import axios from 'axios';
import * as types from './actionTypes';
import { fromJS } from 'immutable';
import { requireWriteList } from 'apis/home'
const changeHomeData = result => ({
    type: types.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList
});
const addHomeList = (list, articlePage) => ({
    type: types.ADD_HOME_LIST,
    list: fromJS(list),
    articlePage
});
const dispatchWriteList = (result, writePage, totalWritePage) => ({
    type: types.GET_WRITE_LIST,
    writeList: result,
    totalWritePage,
    writePage
});
export const getHomeInfo = () => {
    return dispatch => {
        axios.get('/api/homeData.json').then(resp => {
            let result = resp.data.data;
            dispatch(changeHomeData(result));
        });
    };
};
export const getMoreList = articlePage => {
    return dispatch => {
        axios.get('/api/homeList.json?page=' + articlePage).then(resp => {
            let result = resp.data.data;
            dispatch(addHomeList(result, articlePage + 1));
        });
    };
};
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
