import service from 'utils/fetch';

export const requireLoginApi = (name, password) => {
    return service.post('/apis/login', {
        name,
        password
    })
}