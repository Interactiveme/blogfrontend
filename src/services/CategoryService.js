import Api from '../Api'

const baseURL = 'http://127.0.0.1:8000/api/';

const loadCategories = async () =>{
    return fetch(baseURL+ `categories/`)
    .then((res)=>{
        var result = res.json();
        return result;
    });
}

export default {
    loadCategories
}