import React from "react";
import Post from "../../molecules/post/post";
import Comments from "../../molecules/comments/comments";
import "./postView.css";

interface PostViewProps {
    POST_ID: string;
    USER_ID: string;
    USER_NAME: string;
    USER_IMAGE: string;
    IMAGE_SRC: string;
    title: string;
    TEXT: string;
    content: string;
    status: "rejected" | "fulfilled";
    date: string;
    errorObj?: String[];
    loggedIn: boolean,
    comments: {
        IMAGE_SRC: string;
        USER_NAME: string;
        TEXT: string;
        id: string;
    }[]
}

export default function PostView ({
    POST_ID,
    USER_ID,
    USER_NAME,
    USER_IMAGE,
    IMAGE_SRC,
    title,
    TEXT,
    content,
    status,
    date,
    errorObj,
    loggedIn,
    comments,
    ...props
}: PostViewProps): React.JSX.Element {
    return (
        <>
            <div className="transparent-background-top">
                <Post POST_ID={POST_ID} USER_ID={USER_ID} id={POST_ID} title={title} IMAGE_SRC={IMAGE_SRC} USER_NAME={USER_NAME} USER_IMAGE={USER_IMAGE} content={content} date={date} status={status} errorObj={errorObj}/>
                <div className="transparent-background-bottom">
                    <Comments  status={status} comments={comments} loggedIn={loggedIn}/>
                </div>
            </div>
        </>
    )
}