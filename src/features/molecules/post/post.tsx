import React from 'react';
import User from '../user/user';
import bitmap from "../../../assets/bitmap.svg";
import PostLoading from "../../../assets/post_display_loading.svg";
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
    status: "rejected" | "fulfilled";
    errorObj?: String[];
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
    ...props
}: PostProps): React.JSX.Element {
    switch (status) {
        case "rejected" as "rejected": {
            return (
                <article className='post'>
                    <div className='flex-in-between'>
                        <User src={USER_IMAGE} user={USER_NAME}/>
                        <a href='#'><img src={bitmap} className='close-button' alt='close button'/></a>
                    </div>
                </article>
            )
        }
        break;
        case "fulfilled" as "fulfilled": {
            return (
                <article className='post'>
                    <div className='flex-in-between'>
                        <User src={USER_IMAGE} user={USER_NAME}/>
                        <a href='#'><img src={bitmap} className='close-button' alt='close button'/></a>
                    </div>

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
                    <img src={PostLoading} className="loading" />
                </article>
            )
        }
    }
}