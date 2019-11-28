import service from 'utils/fetch';

export const requireWriteList = () => {
    return service.get('/api/home/writeList.json')
}