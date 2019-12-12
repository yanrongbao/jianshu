import service from 'utils/fetch';

export const requireUserList = (params) => {
    const { user, page, pageSize } = params;
    return service.get(`/apis/userList?user=${user}&page=${page}&pageSize=${pageSize}`)
}