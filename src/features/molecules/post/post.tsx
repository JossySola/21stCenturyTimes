import React from 'react';
import User from '../user/user';
import bitmap from "../../../assets/bitmap.svg";
import PostLoading from "../../../assets/post_display_loading.svg";
import Interactions from '../likes/likes';
import OpenArticle from "../../../assets/open_tab_white.svg";
import { redirect } from 'react-router-dom';
import './post.css';

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
    status: "rejected" | "fulfilled" | "";
    errorObj?: String[];
    ups: number;
    downs: number;
    num_comments: number;
    url: string;
}

export default function Post({
    POST_ID,
    title,
    IMAGE_SRC,
    USER_NAME,
    USER_IMAGE,
    USER_ID,
    content,
    date,
    status,
    errorObj,
    ups,
    downs,
    num_comments,
    url,
    ...props
}: PostProps): React.JSX.Element {
    if (!POST_ID) {
        window.location.assign("http://localhost:5173/");
    }
    
    switch (status) {
        case "rejected" as "rejected": {
            return (
                <article className='post'>
                    <div className='flex-in-between'>
                        <User src={USER_IMAGE} user={USER_NAME}/>
                        <img src={bitmap} className='close-button' alt='Close Button' onClick={() => window.history.go(0)}/>
                    </div>
                </article>
            )
        }
        break;
        case "fulfilled" as "fulfilled": {
            return (
                <article className='post'>
                    <div className='flex-in-between'>
                        <User src={USER_IMAGE} user={`/r/${USER_NAME}`}/>
                        <img src={bitmap} className='close-button' alt='close button' onClick={() => window.history.go(0)}/>
                    </div>

                    {date && <p className='post-date'>• {date}</p>}
                    <h2>{title}</h2>
                    { IMAGE_SRC && <img src={IMAGE_SRC} className='post-image' style={{width: "60vw", maxWidth: 550}}/>}
                    { content && <p>{content}</p>}

                    <div className='post-footer'>
                        <Interactions likes={ups} dislikes={downs} comments={num_comments} />
                        <a href={url} target='_blank'>Open article<img src={OpenArticle}/></a>
                    </div>
                </article>
            )
        }
        break;
        default: {
            return (
                <article className='post'>
                    <img src={PostLoading} className="loading" />
                </article>
            )
        }
    }
}