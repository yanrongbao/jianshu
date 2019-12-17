import service from 'utils/fetch';

export const requireWriteList = () => {
    return service.get('/api/home/writeList.json')
}
export const requireHomeList = (page = 1, pageSize = 6) => {
    return service.get(`/apis/public/list?page=${page}&pageSize=${pageSize}`)
}