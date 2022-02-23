import Api from '../Api'

const baseURL = 'http://127.0.0.1:8000/api/';

const loadPosts = async () =>{
    return fetch(baseURL+ `post/`)
    .then((res)=>{
        var result = res.json();
        return result;
    });
};

const loadPostsByCategory = async (data) =>{
    return fetch(baseURL+ `post/bycategory/${data.id}`)
    .then((res)=>{
        var result = res.json();
        return result;
    });
};

export default {
    loadPosts,
    loadPostsByCategory
}