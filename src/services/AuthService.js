import Api from '../Api'

const login = async (credentials) =>{
    return Api.post(`token/`, {
        email: credentials.email,
        password: credentials.password,
    })
    .then((res)=>{
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        Api.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token');
        return res;
    });
}

export default {
    login
}