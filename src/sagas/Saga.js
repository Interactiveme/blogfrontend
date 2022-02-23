import {  put, takeLatest } from 'redux-saga/effects';
import AuthService from '../services/AuthService';
import PostService from '../services/PostService';
import CategoryService from '../services/CategoryService';

const login = function* (action) {
    try {        
        var res = yield AuthService.login(action.payload);
        yield put({type: "USER_LOGIN_SUCCEEDED", payload:res.data});       
    } catch (e) {
        yield put({type: "USER_LOGIN_FAILED", message: e.message});
    }
}

const loadPosts = function* (action) {
    try {
        var res = yield PostService.loadPosts();
        yield put({type: "LOAD_POSTS_SUCCESS", payload:res});       
    } catch (e) {
        yield put({type: "LOAD_POSTS_FAILED", message: e.message});
    }
}

const loadPostsByCategory = function* (action) {
    try {
        var res = yield PostService.loadPostsByCategory(action.payload);
        yield put({type: "LOAD_POSTS_SUCCESS", payload:res});       
    } catch (e) {
        yield put({type: "LOAD_POSTS_FAILED", message: e.message});
    }
}

const loadCategories = function* (action) {
    try {
        var res = yield CategoryService.loadCategories();
        yield put({type: "LOAD_CATEGORIES_SUCCESS", payload:res});       
    } catch (e) {
        yield put({type: "LOAD_CATEGORIES_FAILED", message: e.message});
    }
}

function* Saga() {
  yield takeLatest("USER_LOGIN_REQUESTED", login);
  yield takeLatest("LOAD_POSTS_REQUEST", loadPosts);
  yield takeLatest("LOAD_CATEGORIES_REQUEST", loadCategories);
  yield takeLatest("LOAD_POSTS_BY_CATEGORY_REQUEST", loadPostsByCategory);
  
}

export default Saga;