import React, { useEffect } from "react";
import { Input } from "../../atoms/input/Input";
import Submit from "../../atoms/submit/Submit";
import Comment from "../comment/comment";
import dots from "../../../assets/loading_dots.svg";

import bar from "../../../assets/comments-bar.svg"
import "./comments.css";
import $Handler from "../../../scripts/classes/state";

interface CommentsProps {
    loggedIn: boolean,
    onSubmit: () => {},
    commentHandler: $Handler;
}

export default function Comments ({onSubmit, loggedIn = false, commentHandler, ...props} : CommentsProps) : React.JSX.Element {
    let comments = commentHandler.getData();
    
    if (comments.length === 0) {
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
    }
    return (
        <section className="comments" onClick={e => e.stopPropagation()}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img src={bar}  className="comments-bar"/>
            </div>

            

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