import React from 'react';
import './post.css';
import User from '../user/user';

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
    status: "rejected" | "fulfilled";
    errorObj?: String[];
}

export default function Post({
    POST_ID,
    title,
    IMAGE_SRC,
    USER_NAME,
    USER_IMAGE,
    content,
    date,
    status,
    errorObj,
    ...props
}: PostProps): React.JSX.Element {
    switch (status) {
        case "rejected" as "rejected": {
            return (
                <article className='post'></article>
            )
        }
        break;
        case "fulfilled" as "fulfilled": {
            return (
                <article className='post'>
                    <User src={USER_IMAGE} user={USER_NAME}/>
                    <p className='post-date'>• {date}</p>
                    <h2>{title}</h2>
                    { IMAGE_SRC && <img src={IMAGE_SRC}/>}
                    { content && <p>{content}</p>}
                </article>
            )
        }
        break;
        default: {
            return (
                <article className='post'>
                    <div className='loading-header'></div>
                    <div className='loading-img'></div>
                    <div style={{
                        gridArea: "txt"
                    }}>
                        <div className='loading-text'></div>
                        <div className='loading-text'></div>
                        <div className='loading-text'></div>
                    </div>
                </article>
            )
        }
    }
}