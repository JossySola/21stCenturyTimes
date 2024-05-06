import React, { useState } from "react";
import like from "../../../assets/like.svg";
import dislike from "../../../assets/dislike.svg";
import comment from "../../../assets/comment_icon.svg";
import _liked from "../../../assets/like_touched.svg";
import _disliked from "../../../assets/dislike_touched.svg";

import setVote from "../../../scripts/actions/vote";

import "./likes.css";

interface Props {
    fullname: string,
    likes?: number,
    dislikes?: number,
    comments?: number
}

export default function Interactions({fullname, likes = 0, dislikes = 0, comments = 0}: Props): React.JSX.Element {
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    const amount = (num: number): string => {
        let str;
        if (num < 1000) {
            return num.toString();
        } else if (num > 999 && num < 10000) {
            const min = num.toString();
            str = min[1] !== '0' ? `${min[0]}.${min[1]} K` : `${min[0]} K`;
            return str;
        } else if (num > 9999 && num < 100000) {
            const min = num.toString();
            str = min[0] + min[1] + ' K';
            return str;
        } else if (num > 99999 && num < 1000000) {
            const min = num.toString();
            str = min[0] + min[1] + min[2] + ' K';
            return str;
        } else if (num > 999999) {
            let min = num.toString();
            let arr = min.split("");
            for (let n = 0; n < 6; n++) {
                arr.pop();
            }
            const newMin = arr.join('');
            str = newMin + ' M';
            return str;
        }
        return '0'
    }
    
    return (
        <div className="interactions-panel">
            {liked ? 
                <>
                    <img src={_liked} onClick={() => {
                        setLiked(false)
                    }}/>
                    <span>{amount(likes)}</span>
                </>
            : 
                <>
                    <img src={like} onClick={() => {
                        if (disliked === false) {
                            setLiked(true);
                            setVote()
                        } else {
                            setDisliked(false);
                            setLiked(true);
                        }
                    }}/>
                    <span>{amount(likes)}</span>
                </>
            }

            {disliked ? 
                <>
                    <img src={_disliked} onClick={() => {
                        setDisliked(false)
                    }}/>
                    <span>{amount(dislikes)}</span>
                </>
             : 
                <>
                    <img  src={dislike} onClick={() => {
                        if (liked === false) {
                            setDisliked(true);
                        } else {
                            setLiked(false);
                            setDisliked(true);
                        }
                    }}/>
                    <span>{amount(dislikes)}</span>
                </>
            }
            
            <img src={comment} title="Comments by deleted users won't be displayed."/>
            <span>{amount(comments)}</span>
        </div>
    )
}