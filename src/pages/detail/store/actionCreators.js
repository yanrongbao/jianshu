import axios from 'axios';
import * as types from './actionTypes';
const changeDetail = (title, content) => ({
    type: types.CHANGE_DETAIL,
    title: title,
    content: content
});
export const getDetail = id => {
    return dispatch => {
        axios
            .get('/api/getDetailJson.json?id=' + id)
            .then(resp => {
                const result = resp.data.data;
                dispatch(changeDetail(result.title, result.content));
            })
            .catch(() => {});
    };
};
