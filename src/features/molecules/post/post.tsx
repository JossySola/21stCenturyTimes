import React from 'react';
import User from '../user/user';
import bitmap from "../../../assets/bitmap.svg";
import PostLoading from "../../../assets/post_display_loading.svg";
import Interactions from '../likes/likes';
import OpenArticle from "../../../assets/open_tab_white.svg";
import Comments from '../comments/comments';
import './post.css';
import $Handler from '../../../scripts/classes/state';

interface PostProps {
    POST_ID: string,
    USER_ID: string,
    id: string;
    title: string;
    IMAGE_SRC?: string;
    USER_NAME: string;
    USER_IMAGE: string;
    content?: string;
    date: string;
    errorObj?: String[];
    ups: number;
    downs: number;
    num_comments: number;
    url: string;
    commentHandler: $Handler;
    loggedIn: boolean,
    onSubmit: () => {},
}
type CommentObject = {
    IMAGE_SRC: string;
    author: string;
    author_fullname: string;
    body: string;
    downs: number;
    id: string;
    kind: string;
    name: string;
    permalink: string;
    replies: {};
    subreddit_id: string;
    ups: number;
}[];

export default function Post({
    POST_ID,
    title,
    IMAGE_SRC,
    USER_NAME,
    USER_IMAGE,
    USER_ID,
    content,
    date,
    errorObj,
    ups,
    downs,
    num_comments,
    commentHandler,
    loggedIn,
    onSubmit,
    url,
    ...props
}: PostProps): React.JSX.Element {
    if (!POST_ID) {
        window.location.assign("http://localhost:5173/");
        // With URL Params, Userless Auth and Subreddit ID (t3), require t3 data if page is refreshed
    }
    
    return (
        <>
            <article className='post' onClick={e => e.stopPropagation()}>
                <div className='flex-in-between'>
                    <User src={USER_IMAGE} user={`r/${USER_NAME}`}/>
                    <img src={bitmap} className='close-button' alt='close button' onClick={() => window.history.go(-1)}/>
                </div>

                {date && <p className='post-date'>• {date}</p>}
                <h2>{title}</h2>
                { IMAGE_SRC && <img src={IMAGE_SRC} className='post-image' style={{width: "60vw", maxWidth: 550}}/>}
                { content && <p style={{fontSize: "1.3rem", textAlign: "justify"}}>{content}</p>}

                <div className='post-footer'>
                    <Interactions likes={ups} dislikes={downs} comments={num_comments} />
                    <a href={url} target='_blank'>Open article<img src={OpenArticle}/></a>
                </div>
            </article>
            
            <Comments  commentHandler={commentHandler} onSubmit={onSubmit} loggedIn={loggedIn}/>
        </>
    )
        
    
    
}