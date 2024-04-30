import React, { useEffect, useState } from 'react';
import './comment.css';
import Interactions from '../likes/likes';

interface Comment {
    IMAGE_SRC: string;
    author: string;
    body_html: string;
    body: string;
    id: string;
    ups: number;
    downs: number;
    num_replies: number;
    subreddit_id: string;
    author_fullname: string;
}
export default function Comment({
    id,
    author = 'Loading User...',
    body = 'Loading comment...',
    body_html,
    IMAGE_SRC='./src/assets/avatar_default_5.png',
    ups,
    downs,
    num_replies,
    subreddit_id,
    author_fullname,
    ...props
}: Comment): React.JSX.Element {
    const [htmlString, setHtmlString] = useState("");
    const [userProfile, setUserProfile] = useState("");

    useEffect(() => {
        setHtmlString(decodeHTML(body_html));
        //getUserImage().then(value => setUserProfile(value));
    }, [])

    const getUserImage = async () => {
        try {
            const body = await fetch(`https://www.reddit.com/user/${author}/about.json`);
            const response = await body.json();
            return response.data.snoovatar_img;
        } catch (e) {
            console.error(e)
        }
    }
    
    const decodeHTML = (str: string) => {
        const symbols = {
            "&excl;": "!",
            "&quot;": '"',
            "&QUOT;": '"',
            "&num;": "#",
            "&dollar;": "$",
            "&percnt;": "%",
            "&amp;": "&",
            "&AMP;": "&",
            "&#39;": "'",
            "&apos;": "'",
            "&lpar;": "(",
            "&rpar;": ")",
            "&ast;": "*",
            "&midast;": "*",
            "&plus;": "+",
            "&comma;": ",",
            "&period;": ".",
            "&sol;": "/",
            "&colon;": ":",
            "&semi;": ';',
            "&lt;": "<",
            "&LT;": "<",
            "&gt;": ">",
            "&GT;": ">",
            "&quest;": "?",
            "&commat;": "@",
            "&lsqb;": "[",
            "&lbrack;": "[",
            "&rsqb;": "]",
            "&rbrack;": "]",
            "&bsol;": "\/",
            "&Hat;": "^",
            "&lowbar;": "_",
            "&UnderBar;": "_",
            "&grave;": "`",
            "&DiacriticalGrave;": "`",
            "&lcub;": "{",
            "&lbrace;": "{",
            "&verbar;": "|",
            "&vert;": "|",
            "&VerticalLine;": "|",
            "&rcub;": "}",
            "&rbrace;": "}",
        }
        const txt = document.createElement("textarea");
        txt.innerHTML = str;
        const value = txt.value;
        
        for (const symbol in symbols) {
            if (value.indexOf(symbol) >= 0) {
                const newStr = value.replaceAll(symbol, symbols[symbol]);
                return newStr;
            }
        }
        return value;
    }

    const wrapping = (str: string) => {
       const wrapper = document.getElementById(id);
       if (wrapper) wrapper.innerHTML = str;
    }

    if (htmlString) wrapping(htmlString);

    return (
        <>
            <section className='horizontal-flex' style={!htmlString ? {display: "none"} : {display: "flex"}}>
                <img className='user-profile' src={userProfile ? userProfile : IMAGE_SRC}/>
                <div className='comment'>

                    <p className='author'>u/{author}</p>
                    <div id={id}></div>
                    <Interactions likes={ups} dislikes={downs} comments={num_replies} />

                </div>
            </section>   
        </>
    )
}