import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Login from './components/admin/Login'
import Dashboard from './components/admin/Dashboard'
import Posts from './components/public/Posts'
import Post from './components/public/Post'

import store from './redux/store'
import {Provider} from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
          <Route path="/login" element={<Login/> } />
          <Route path="/dashboard" element={<Dashboard /> } />
          <Route path="" element={<Posts/> } />
          <Route path="/category/:id" exact element={<Posts/> } />
          <Route path="/post/:slug" element={<Post/> } />
        </Routes>
      </BrowserRouter>  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
