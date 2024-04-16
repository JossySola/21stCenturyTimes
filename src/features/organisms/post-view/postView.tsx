import React from "react";
import Post from "../../molecules/post/post";
import Comments from "../../molecules/comments/comments";
import "./postView.css";

interface PostViewProps {
    postHandler?: {};
    POST_ID: string;
    USER_ID: string;
    USER_NAME: string;
    USER_IMAGE: string;
    IMAGE_SRC: string;
    title: string;
    content: string;
    status: "rejected" | "fulfilled";
    date: string;
    errorObj?: String[];
    loggedIn: boolean,
    onSubmit: () => {},
    comments: {
        IMAGE_SRC: string;
        USER_NAME: string;
        TEXT: string;
        id: string;
    }[]
}

export default function PostView ({
    postHandler,
    errorObj,
    onSubmit,
    comments,
    ...props
}: PostViewProps): React.JSX.Element {
    const content = postHandler.getPost();
    console.log(content)
    
    return (
        <div className="transparent-container">
            <Post POST_ID={content.POST_ID} USER_ID={content.USER_ID} id={content.POST_ID} title={content.title} IMAGE_SRC={content.IMAGE_SRC_LARGE} USER_NAME={content.USER_NAME} USER_IMAGE={content.USER_IMAGE} content={content.content} date={content.date} status={"fulfilled"} errorObj={content.errorObj}/>
                
            <Comments  onSubmit={onSubmit} status={content.status} comments={comments} loggedIn={content.loggedIn}/>
        </div>
    )
}