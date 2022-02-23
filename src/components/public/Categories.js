import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const dispatchLoadCategoriesRequest = (dispatch) => {
  dispatch({ type: 'LOAD_CATEGORIES_REQUEST' });
}

const Posts = (props) => {

  useEffect(() => {
    dispatchLoadCategoriesRequest(props.dispatch);
  }, []);

  const data = useSelector(state => state.categories.items)
  return (
    <>
        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
          <Link className="p-2 link-secondary" key='all' to={`/`}>All</Link>
            {data.map((cat)=>{
                return (<Link className="p-2 link-secondary" key={cat.id} to={`/category/${cat.id}`}>{cat.name}</Link>)
            })
            }
          </nav>
        </div>
    </>
  );

}

export default connect()(Posts);