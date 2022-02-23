import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import Markdown from 'markdown-to-jsx';
import { useParams } from 'react-router-dom'

export default function Post(props) {

    const params = useParams();
    
    const post = useSelector(state => state.blog.posts
    .find((post) =>{
        debugger;
        return post.slug == params.slug
    }));
    
    return(
        <div className='post'>
            <div className="container" maxWidth="md">
                <Markdown >{post.content}</Markdown>
            </div>
        </div>
    );
}