import React from 'react';
import './comment.css';

interface Comment {
    IMAGE_SRC: string;
    author: string;
    body_html: string;
    body: string;
    id: string;
}
export default function Comment({
    author = 'Loading User...',
    body = 'Loading comment...',
    body_html,
    IMAGE_SRC='./src/assets/avatar_default_5.png',
    ...props
}: Comment): React.JSX.Element {
    // https://styles.redditmedia.com/t5_auvtl/styles/profileIcon_snoo41970e75-6235-493e-aeca-e084c554e63b-headshot-f.png
    
    
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

    const htmlString = decodeHTML(body_html);

    const wrapping = (str: string) => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = str;
        console.log(wrapper?.firstChild)
        return [wrapper?.firstChild];
    }

    return (
        <section className='horizontal-flex'>
            <img className='user-profile' src={IMAGE_SRC}/>
            <div className='comment'>
                <p className='author'>/r/{author}</p>
                {wrapping(htmlString)}
            </div>
        </section>
        
    )
}