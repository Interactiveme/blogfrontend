import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import './Post.css'
 const Article = (props) =>{

    const post = props.post;
    console.log(post)
    const navigate = useNavigate();


    const onReadMoreClick = (evt) =>{
        navigate(`post/${post.slug}`);
    }

    
    return (
        <article className="blog-post">
        <Markdown >{post.content.substring(0,500) + '.....'}</Markdown>
        <button onClick={onReadMoreClick}>Read More</button>
      </article>

    )
 };

 export default Article