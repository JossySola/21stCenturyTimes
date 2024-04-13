import React from "react";
import { Link } from "react-router-dom";
import PreviewWithImage from "../../../assets/previewWPic.svg";
import PreviewBig from "../../../assets/previewBig.svg";
import PreviewSmall from "../../../assets/previewSmall.svg";
import RedditLockup from "../../../assets/Reddit_Lockup.svg";

import "./postPreview.css";

interface PreviewProps {
    POST_ID: string;
    title: string;
    IMAGE_SRC_SMALL?: string;
    IMAGE_SRC_MEDIUM?: string;
    IMAGE_SRC_LARGE?: string;
    IMAGE_SMALL_WIDTH?: string;
    IMAGE_MEDIUM_WIDTH?: string;
    IMAGE_LARGE_WIDTH?: string;
    content?: string;
    link: string;
    style: "big image" | "big" | "small";
    grid: string;
}
export default function PostPreview({
    style,
    POST_ID,
    title,
    IMAGE_SRC_SMALL,
    IMAGE_SMALL_WIDTH,
    IMAGE_SRC_MEDIUM,
    IMAGE_MEDIUM_WIDTH,
    IMAGE_SRC_LARGE,
    IMAGE_LARGE_WIDTH,
    content,
    link,
    grid,
    ...props
}: PreviewProps): React.JSX.Element {
    
    switch (style) {

        case "big image" as "big image": {
            if (!link) {
                return <img src={PreviewWithImage} style={{gridArea: grid}} className="loading"/>
            }
            return (
                <Link to={`article/${link}`} className="post-link" style={{gridArea: grid}}>
                    <article className="post-preview-img preview-up">
                        {IMAGE_SRC_LARGE ? <img src={IMAGE_SRC_LARGE} style={{
                            margin: "1rem 0 1rem 0",
                            width: IMAGE_LARGE_WIDTH,
                            maxWidth: "100%",
                            borderRadius: "1 rem",
                        }}/> : <img src={RedditLockup} alt="Reddit Icon" style={{
                            width: 174,
                            height: 64,
                            margin: 32
                        }}/>}
                        <h2>{title}</h2>
                        {content && <p>{content}</p>}
                        <span>Read More</span>
                    </article>
                </Link>
            )
        };


        case "big" as "big": {
            if (!link) {
                return <img src={PreviewBig} style={{gridArea: grid}} className="loading"/>
            }
            return (
                <Link to={`article/${link}`} className="post-link" style={{gridArea: grid}}>
                    <article className="post-preview-big preview-up">
                        {IMAGE_SRC_MEDIUM && <img src={IMAGE_SRC_MEDIUM} style={{
                            margin: "1rem 0 1rem 0",
                            width: IMAGE_MEDIUM_WIDTH,
                            maxWidth: "100%",
                            alignSelf: "center"
                        }}/>}
                        <h2>{title}</h2>
                        {content && <p>{content}</p>}<span>Read More</span>
                    </article>
                </Link>
            )
        };


        case "small" as "small": {
            if (!link) {
                return <img src={PreviewSmall} style={{gridArea: grid}} className="loading"/>
            }
            return (
                <Link to={`article/${link}`} className="post-link" style={{gridArea: grid}}>
                    <article className="post-preview-small preview-left">
                        {IMAGE_SRC_SMALL && <img src={IMAGE_SRC_SMALL} style={{
                            margin: "0 0 1rem 0",
                            width: IMAGE_SMALL_WIDTH
                        }}/>}
                        <h3>{title}</h3>
                        {content && <p>{content}</p>}<span>Read More</span>
                    </article>
                </Link>
            )
        };


        default: {
            return (
                <></>
            )
        };
    }
}