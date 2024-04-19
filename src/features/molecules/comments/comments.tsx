import React from "react";
import { Input } from "../../atoms/input/Input";
import Submit from "../../atoms/submit/Submit";
import Comment from "../comment/comment";
import dots from "../../../assets/loading_dots.svg";

import bar from "../../../assets/comments-bar.svg"
import "./comments.css";
import { useParams } from "react-router-dom";
import getComments from "../../../scripts/get_comments";

interface CommentsProps {
    loggedIn: boolean,
    onSubmit: () => {},
    status: "pending" | "fulfilled";
}

export default function Comments ({onSubmit, loggedIn = false, status, ...props} : CommentsProps) : React.JSX.Element {
    // /r/:subreddit/comments/:postId/:postTitle
    const params = useParams();
    const subreddit = params.subreddit;
    const postId = params.postId;
    const postTitle = params.postTitle;
    const url = `/r/${subreddit}/comments/${postId}/${postTitle}`;
    let com;
    getComments(url).then(value => com = value)
    console.log(com)
    

    let comments = "";

    switch (status) {
        case "pending" as "pending": {
            return (
                <section className="comments" onClick={e => e.stopPropagation()}>
                    <div style={{display: "flex", justifyContent: "center", flexFlow: "column wrap", alignItems: "center"}}>
                        <img src={bar}  className="comments-bar"/>
                        <img src={dots} className="loading-dots"/>
                    </div>
                </section>
            )
        }
        break;
        case "fulfilled" as "fulfilled": {
            if (comments?.length === 0) {
                return (
                    <section className="comments" onClick={e => e.stopPropagation()}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <img src={bar}  className="comments-bar"/>
                        </div>
                        <p style={{textAlign: "center", fontWeight: "bold"}}>There are no comments yet.</p>
                        {loggedIn ? (
                            <section className='write-comment'>
                                <Input type='typeComment' placeholder='Write a comment...'/>
                                <Submit onSubmit={onSubmit} text="Submit"/>
                            </section>
                        ) : (
                            <p style={{textAlign: "center"}}>To comment on Reddit please <Submit onSubmit={onSubmit} text="Log In" primary={true}/></p>
                        )}
                    </section>
                )
            };
            return (
                <section className="comments" onClick={e => e.stopPropagation()}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <img src={bar}  className="comments-bar"/>
                    </div>

                    {comments?.map((comment) => {
                        return <Comment key={comment.id} id={comment.id} TEXT={comment.TEXT} USER_NAME={comment.USER_NAME} IMAGE_SRC={comment.IMAGE_SRC}/>  
                    })}

                    {loggedIn ? (
                        <section className='write-comment'>
                            <Input type='typeComment' placeholder='Write a comment...'/>
                            <Submit onSubmit={onSubmit} text="Submit"/>
                        </section>
                    ) : (
                        <h4 style={{textAlign: "center"}}>To comment on Reddit please <Submit onSubmit={onSubmit} text="Log In" primary={true}/></h4>
                    )}
                </section>
            )
        }
        break;
        default: {
            return (
                <div className="comments" onClick={e => e.stopPropagation()}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <img src={bar}  className="comments-bar"/>
                    </div>
                    <div className='loading-comment'>
                        <div className='comment-circle'></div>
                        <div className='comment-rectangle'></div>
                    </div>
                </div>
            );
        }
    }
}