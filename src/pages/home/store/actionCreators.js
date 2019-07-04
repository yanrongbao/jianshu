import axios from 'axios';
import * as types from './actionTypes';
import { fromJS } from 'immutable';
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
export const toggleTopShow = show => ({
    type: types.TOGGLE_SCROLL_SHOW,
    show
});
