import React, { useEffect, useState } from "react";
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

export default function Comments ({onSubmit, loggedIn = false, commentHandler, fullname, ...props} : CommentsProps) : React.JSX.Element {
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

    const url: string = commentHandler.getData();
    const itemsPerLoad: number = 5;
    const capsule = document.getElementById("encapsulate");
    const loader = document.getElementById("loader");
    let arr = []
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
        
        if (currentScroll > scrollHeight + 9) {
            let index = capsule?.children.length;
            const limit = comments.length - 1;
            console.log(comments.length)
            if (index && !(index >= limit)) {
                for (let i = 0; i < itemsPerLoad; i++) {
                    if (comments[index]) {
                        arr.push(<Comment fullname={comments[index].name} date={comments[index].created} author_fullname={comments[index].author_fullname} subreddit_id={comments[index].subreddit_id} num_replies={comments[index].num_replies} IMAGE_SRC={comments[index].IMAGE_SRC} author={comments[index].author} body={comments[index].body} body_html={comments[index].body_html} ups={comments[index].ups} downs={comments[index].downs} key={comments[index].id} id={comments[index].id}/>)                        

                    }
                    index++;
                }
                setJSX(prev => prev.concat(arr));
            } else {
                loader?.remove();
            }
        }
    }
    const firstLoad = () => {
        let temp = [];
        for (let i = 0; i < itemsPerLoad; i++) {
            if (comments[i].kind === "t1") {
                temp.push(<Comment fullname={comments[i].name} date={comments[i].created} author_fullname={comments[i].author_fullname} subreddit_id={comments[i].subreddit_id} num_replies={comments[i].num_replies} IMAGE_SRC={comments[i].IMAGE_SRC} author={comments[i].author} body={comments[i].body} body_html={comments[i].body_html} ups={comments[i].ups} downs={comments[i].downs} key={comments[i].id} id={comments[i].id}/>);    
            }
        }
        return temp;
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
                
                <div id="encapsulate" onScroll={() => handleInfiniteScroll()}>
                    {comments && comments.length > itemsPerLoad ? 
                        <>
                            {firstLoad()}
                            {JSX}
                            <img src={loadingComment} id="loader" />
                        </> 
                        : 
                        comments.map(comment => {
                            if (comment.kind === "t1") {
                                return <Comment fullname={comment.name} date={comment.created} author_fullname={comment.author_fullname} subreddit_id={comment.subreddit_id} num_replies={comment.num_replies} IMAGE_SRC={comment.IMAGE_SRC} author={comment.author} body={comment.body} body_html={comment.body_html} ups={comment.ups} downs={comment.downs} key={comment.id} id={comment.id}/>
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