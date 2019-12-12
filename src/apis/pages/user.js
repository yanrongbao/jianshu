import service from 'utils/fetch';
export const requireCheckUserApi = (name) => {
    return service.get('/apis/user/checkname?name=' + name)
}

export const requiteCreateUserApi = (name, password, phone, verificationCode) => {
    return service.post('/apis/user', {
        name, password, phone, verificationCode
    })
}