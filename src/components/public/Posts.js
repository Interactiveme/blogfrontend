import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Categories from "./Categories";
import Article from './Article';

import './Post.css';

const dispatchLoadPostRequest = (dispatch) => {
  dispatch({ type: 'LOAD_POSTS_REQUEST' });
}

const dispatchLoadPostByCategoryRequest = (dispatch, params) => {
  dispatch({ type: 'LOAD_POSTS_BY_CATEGORY_REQUEST', payload:params });
}

const Posts = (props) => {

  const params = useParams();
  
  useEffect(() => {
    if(params.id){
      dispatchLoadPostByCategoryRequest(props.dispatch, params);
    }else{
      dispatchLoadPostRequest(props.dispatch);
    }
  },[]) 

  const data = useSelector(state => state.blog.posts)

  return (
    <>
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-12 text-center">
              <a className="blog-header-logo text-dark" href="#">Joseph Smith</a>
            </div>
          </div>
        </header>

        <Categories {...props} />
      </div>

      <main className="container">
        <div className="row g-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
              From the Firehose
            </h3>
            {
              data.map((post) => {
                return (<Article post={post} key={post.id}/>);
              })
            }

            <nav className="blog-pagination" aria-label="Pagination">
              <a className="btn btn-outline-primary" href="#">Older</a>
              <a className="btn btn-outline-secondary disabled">Newer</a>
            </nav>
          </div>
        </div>
      </main>

      <footer className="blog-footer">
        <div className="p-4">
          <h5 className="fst-italic">Elsewhere</h5>
          <ol className="list-unstyled">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
          </ol>
        </div>
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
    </>
  );

}

export default connect(null)(Posts);