import React from "react";
import Post from "../../molecules/post/post";
import Comments from "../../molecules/comments/comments";
import "./postView.css";
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
}

export default function PostView ({
    dataObject,
    onSubmit,
    status,
    loggedIn,
    comments,
    ...props
}: PostViewProps): React.JSX.Element {
    const content = dataObject.getData() ? dataObject.getData() : dataObject;
    
    return (
        <>
            {content ? 
                <div className="transparent-container" onClick={(e) => { 
                            e.preventDefault();
                            window.history.go(-1)
                        }
                    }>
                    <Post url={content.url} ups={content.ups} downs={content.downs} num_comments={content.num_comments} POST_ID={content.POST_ID} USER_ID={content.USER_ID} id={content.POST_ID} title={content.title} IMAGE_SRC={content.IMAGE_SRC_LARGE} USER_NAME={content.USER_NAME} USER_IMAGE={content.USER_IMAGE} content={content.content} date={content.date} status={"fulfilled"}/>
                        
                    <Comments  onSubmit={onSubmit} comments={comments} loggedIn={loggedIn} status={status} />
                </div>
                :
                <div className="transparent-container" onClick={(e) => {
                            e.preventDefault();
                            window.history.go(-1)
                        }
                    }>
                    <Post POST_ID="" USER_ID="" id="" title="" IMAGE_SRC="" USER_NAME="" USER_IMAGE="" content="" date="" status="" />
                        
                    <Comments  onSubmit={onSubmit} comments={comments} loggedIn={loggedIn} status={status}/>
                </div>
            }
        </>
    )
}