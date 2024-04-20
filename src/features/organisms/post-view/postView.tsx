import React from "react";
import Post from "../../molecules/post/post";
import Comments from "../../molecules/comments/comments";
import "./postView.css";
import $Handler from "../../../scripts/classes/state";
import { useParams } from "react-router-dom";
import getComments from "../../../scripts/get_comments";

interface PostViewProps {
    dataObject: {
        POST_ID: string;
        USER_ID: string;
        USER_NAME: string;
        USER_IMAGE: string;
        IMAGE_SRC_LARGE: string;
        title: string;
        content: string;
        date: string;
    } | {};
    onSubmit: () => {},
    comments?: {
        IMAGE_SRC: string;
        USER_NAME: string;
        TEXT: string;
        id: string;
    }[],
    status: "pending" | "fulfilled";
    loggedIn: boolean,
    commentHandler: $Handler;
}

export default function PostView ({
    dataObject,
    onSubmit,
    status,
    loggedIn,
    comments,
    commentHandler,
    ...props
}: PostViewProps): React.JSX.Element {
    const content = dataObject.getData() ? dataObject.getData() : dataObject;
    const params = useParams();
    const subreddit = params.subreddit;
    const postId = params.postId;
    const postTitle = params.postTitle;
    const url = `/r/${subreddit}/comments/${postId}/${postTitle}`;

    getComments(url, commentHandler)
    //.then(async value => {await commentHandler.setData(value)});
    
    
    return (
        <>
            {content ? 
                <div className="transparent-container" onClick={(e) => {
                            window.history.go(-1)
                        }
                    }>
                    <Post comments={commentHandler.getData()} commentHandler={commentHandler} url={content.url} ups={content.ups} downs={content.downs} num_comments={content.num_comments} POST_ID={content.POST_ID} USER_ID={content.USER_ID} id={content.POST_ID} title={content.title} IMAGE_SRC={content.IMAGE_SRC_LARGE} USER_NAME={content.USER_NAME} USER_IMAGE={content.USER_IMAGE} content={content.content} date={content.date} status={"fulfilled"} onSubmit={onSubmit} loggedIn={loggedIn}/>
                </div>
                :
                <div className="transparent-container" onClick={(e) => {
                            window.history.go(-1)
                        }
                    }>
                    <Post commentHandler={commentHandler} POST_ID="" USER_ID="" id="" title="" IMAGE_SRC="" USER_NAME="" USER_IMAGE="" content="" date="" status="" />
                </div>
            }
        </>
    )
}