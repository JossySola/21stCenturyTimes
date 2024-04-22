import React, { useEffect } from "react";
import Post from "../../molecules/post/post";
import "./postView.css";
import $Handler from "../../../scripts/classes/state";
import { useLoaderData } from "react-router-dom";

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
    commentHandler,
    ...props
}: PostViewProps): React.JSX.Element {
    const content = dataObject.getData() ? dataObject.getData() : dataObject;
    const comments = useLoaderData();
    console.log(comments)

    return (
        <>
        {content ? 
            <div className="transparent-container" onClick={(e) => {
                        window.history.go(-1)
                    }
                }>
                <Post comments={comments} url={content.url} ups={content.ups} downs={content.downs} num_comments={content.num_comments} POST_ID={content.POST_ID} USER_ID={content.USER_ID} id={content.POST_ID} title={content.title} IMAGE_SRC={content.IMAGE_SRC_LARGE} USER_NAME={content.USER_NAME} USER_IMAGE={content.USER_IMAGE} content={content.content} date={content.date} status={"fulfilled"} onSubmit={onSubmit} loggedIn={loggedIn}/>
            </div>
            :
            <div className="transparent-container" onClick={(e) => {
                        window.history.go(-1)
                    }
                }>
                <Post  POST_ID="" USER_ID="" id="" title="" IMAGE_SRC="" USER_NAME="" USER_IMAGE="" content="" date="" status="" />
            </div>
        }
    </>
    )
    
}