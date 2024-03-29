import React from "react";
import { Input } from "../../atoms/input/Input";
import Submit from "../../atoms/submit/Submit";
import Comment from "../comment/comment";
import bar from "../../../assets/comments-bar.svg"
import "./comments.css";

interface CommentsProps {
    status: "fulfilled" | "rejected";
    loggedIn: boolean,
    comments: {
        IMAGE_SRC: string;
        USER_NAME: string;
        TEXT: string;
        id: string;
    }[]
}

export default function Comments ({status, comments, loggedIn = false, ...props} : CommentsProps) : React.JSX.Element {
    switch (status) {
        case "rejected" as "rejected": {
            return (
                <section className="comments">
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <img src={bar}  className="comments-bar"/>
                    </div>
                </section>
            )
        }
        break;
        case "fulfilled" as "fulfilled": {
            if (comments.length === 0) {
                return (
                    <section className="comments">
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <img src={bar}  className="comments-bar"/>
                        </div>
                        <h3 style={{textAlign: "center"}}>There are no comments yet.</h3>
                        {loggedIn ? (
                            <section className='write-comment'>
                                <Input type='typeComment' placeholder='Write a comment...'/>
                                <Submit onClick={() => {}} text="Submit"/>
                            </section>
                        ) : (
                            <h4 style={{textAlign: "center"}}>To comment on Reddit please <Submit onClick={() => {}} text="Log In" primary={true}/></h4>
                        )}
                    </section>
                )
            };
            return (
                <section className="comments">
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <img src={bar}  className="comments-bar"/>
                    </div>

                    {comments.map((comment) => {
                        return <Comment key={comment.id} id={comment.id} TEXT={comment.TEXT} USER_NAME={comment.USER_NAME} IMAGE_SRC={comment.IMAGE_SRC}/>  
                    })}

                    {loggedIn ? (
                        <section className='write-comment'>
                            <Input type='typeComment' placeholder='Write a comment...'/>
                            <Submit onClick={() => {}} text="Submit"/>
                        </section>
                    ) : (
                        <h4 style={{textAlign: "center"}}>To comment on Reddit please <Submit onClick={() => {}} text="Log In" primary={true}/></h4>
                    )}
                </section>
            )
        }
        break;
        default: {
            return (
                <div className="comments">
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