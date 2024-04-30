import React, { useEffect, useRef, useState } from "react";
import { Input } from "../../atoms/input/Input";
import Submit from "../../atoms/submit/Submit";
import Comment from "../comment/comment";

import dots from "../../../assets/loading_dots.svg";
import bar from "../../../assets/comments-bar.svg"
import loadingComment from "../../../assets/comment_loading.svg";

import "./comments.css";
import $Handler from "../../../scripts/classes/state";
import { filterRedditPrefix } from "../../../scripts/filter_prefixes";

interface CommentsProps {
    loggedIn: boolean,
    onSubmit: () => {},
    commentHandler: $Handler,
}
type Comment_ = {
    IMAGE_SRC: string;
    author: string;
    author_fullname: string;
    body: string;
    downs: number;
    id: string;
    kind: string;
    name: string;
    permalink: string;
    replies: {
        kind: string;
        data: {
            children: {}[]
        }
    };
    subreddit_id: string;
    ups: number;
} | null

export default function Comments ({onSubmit, loggedIn = false, commentHandler, ...props} : CommentsProps) : React.JSX.Element {
    useEffect(() => {
        if (!comments.length) {
            setStatus("pending");
            getComments(url).then((value) => {
                setComments(value);
                setStatus("fullfilled");
            })
        }
    }, [])
// ******************************************** 
    const [comments, setComments] = useState([]);
    const [status, setStatus] = useState("");
    const [JSX, setJSX] = useState([]);
    const ref = useRef(null);

    const url: string = commentHandler.getData();
    let index: number = 0;
    const itemsPerLoad: number = 5;
    const capsule = document.getElementById("encapsulate");
    const loader = document.getElementById("loader");
// ********************************************
    const getComments = async (url: string) => {
        try {
            let parts = url.split("/");
            parts.shift();
            parts.shift();
            const newURL = parts.join("/");
            const permalink = newURL.replace(/.$/, '');
            const body = await fetch(`https://www.reddit.com/r/${permalink}.json`);
            const response = await body.json();
            if (response) {
                let firstTree: Array<any> = [];
                for (let m of response) {
                    filterRedditPrefix(m, firstTree);
                }
                let secondTree: Array<any> = [];
                for (let o of firstTree) {
                    filterRedditPrefix(o, secondTree)
                }
                return secondTree;
            }
        } catch (e) {
            console.error(e);
            return null;
        }
    }
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
    const handleInfiniteScroll = () => {
        const scrollHeight = capsule?.scrollHeight;
        const currentScroll = capsule?.offsetHeight - capsule?.scrollTop;
        if (currentScroll > scrollHeight + 5) {

            if (index !== comments.length) {
                for (let i = 0; i < itemsPerLoad; i++) {
                    index++;
                    if (comments[index]) {
                        setJSX([...JSX, <Comment author_fullname={comments[index].author_fullname} subreddit_id={comments[index].subreddit_id} num_replies={comments[index].num_replies} IMAGE_SRC={comments[index].IMAGE_SRC} author={comments[index].author} body={comments[index].body} body_html={comments[index].body_html} ups={comments[index].ups} downs={comments[index].downs} key={comments[index].id} id={comments[index].id}/>])
                    }
                
                    console.log(`index ${index} - length ${comments.length}`)
                }
            }
        }
    }
// ********************************************
    if (comments && comments.length && comments.length === 1) {
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
            <div style={{display: "flex", justifyContent: "center", flexFlow: "column wrap", alignItems: "center"}}>
                <img src={bar}  className="comments-bar"/>
                {status === "pending" ? <img src={dots} className="loading-dots"/> : null}
                
                <div id="encapsulate" ref={ref} onScroll={() => handleInfiniteScroll()}>
                    {comments && comments.length > itemsPerLoad ? 
                        <>
                            {comments.map(comment => {
                                if (index < itemsPerLoad && comment.kind === "t1") {
                                    index++;
                                    return <Comment author_fullname={comment.author_fullname} subreddit_id={comment.subreddit_id} num_replies={comment.num_replies} IMAGE_SRC={comment.IMAGE_SRC} author={comment.author} body={comment.body} body_html={comment.body_html} ups={comment.ups} downs={comment.downs} key={comment.id} id={comment.id}/>
                                }
                            })}
                            {JSX}
                            <img src={loadingComment} id="loader" />
                        </> 
                        : 
                        comments.map(comment => {
                            if (comment.kind === "t1") {
                                return <Comment author_fullname={comment.author_fullname} subreddit_id={comment.subreddit_id} num_replies={comment.num_replies} IMAGE_SRC={comment.IMAGE_SRC} author={comment.author} body={comment.body} body_html={comment.body_html} ups={comment.ups} downs={comment.downs} key={comment.id} id={comment.id}/>
                            }
                            return;
                        })
                    }
                </div>
                
            </div>
            { isUserLoggedInToComment(loggedIn) }
        </section>
    )
        
}