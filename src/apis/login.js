import service from 'utils/fetch';

export const requireCheckUser = (name) => {
    return service.get('/apis/login/checkname?name=' + name)
}