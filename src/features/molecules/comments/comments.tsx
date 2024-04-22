import React, { useEffect } from "react";
import { Input } from "../../atoms/input/Input";
import Submit from "../../atoms/submit/Submit";
import Comment from "../comment/comment";
import dots from "../../../assets/loading_dots.svg";

import bar from "../../../assets/comments-bar.svg"
import "./comments.css";

interface CommentsProps {
    loggedIn: boolean,
    onSubmit: () => {},
}
type CommentObject = {
    IMAGE_SRC: string;
    author: string;
    author_fullname: string;
    body: string;
    downs: number;
    id: string;
    kind: string;
    name: string;
    permalink: string;
    replies: {};
    subreddit_id: string;
    ups: number;
}[];
type SingleComment = {
    IMAGE_SRC: string;
    author: string;
    author_fullname: string;
    body: string;
    downs: number;
    id: string;
    kind: string;
    name: string;
    permalink: string;
    replies: {};
    subreddit_id: string;
    ups: number;
}

export default function Comments ({onSubmit, loggedIn = false, comments, ...props} : CommentsProps) : React.JSX.Element {
    

    const isUserLoggedInToComment = (logged: boolean) => {
        if (logged) {
            return (
                <section className='write-comment'>
                    <Input type='typeComment' placeholder='Write a comment...'/>
                    <Submit onSubmit={onSubmit} text="Submit"/>
                </section>
            )
        } else {
            return (
                <h4 style={{textAlign: "center"}}>To comment on Reddit please <Submit onSubmit={onSubmit} text="Log In" primary={true}/></h4>
            )
        }
    }
    
    if (!comments) {
        return (
            <section className="comments" onClick={e => e.stopPropagation()}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img src={bar}  className="comments-bar"/>
                </div>
                <p style={{textAlign: "center", fontWeight: "bold"}}>There are no comments yet.</p>
                { isUserLoggedInToComment(loggedIn) }
            </section>
        )
    }
    return (
        <section className="comments" onClick={e => e.stopPropagation()}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img src={bar}  className="comments-bar"/>
            </div>
            { isUserLoggedInToComment(loggedIn) }
        </section>
    )
        
}