import React from "react";
import { Link } from "react-router-dom";
import PreviewWithImage from "../../../assets/previewWPic.svg";
import PreviewBig from "../../../assets/previewBig.svg";
import PreviewSmall from "../../../assets/previewSmall.svg";
import RedditLockup from "../../../assets/Reddit_Lockup.svg";

import "./postPreview.css";

interface PreviewProps {
    raw?: any;
    postHandler?: any;
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
    raw,
    postHandler,
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
                <article className="post-link" style={{gridArea: grid}}>
                    {IMAGE_SRC_LARGE ? 
                    (
                        <Link to={`article/${link}`} className="post-preview-img preview-up" onClick={() => {
                            postHandler.setPost(raw);
                        }}>
                            <figure>
                                <picture>
                                    <img src={IMAGE_SRC_LARGE} style={{
                                    margin: "1rem 0 1rem 0",
                                    width: IMAGE_LARGE_WIDTH,
                                    maxWidth: "100%",
                                    borderRadius: "1 rem",}}/>
                                </picture>
                                <figcaption>
                                    <h2>{title}</h2>
                                </figcaption>
                            </figure>
                            <p>Read More</p>
                        </Link>
                    )
                    : 
                    (
                    <Link to={`article/${link}`} className="post-link" style={{gridArea: grid}}>
                        <img src={RedditLockup} alt="Reddit Icon" style={{
                            width: 174,
                            height: 64,
                            margin: 32
                        }}/>
                        <h2>{title}</h2>
                        {content && <p>{content}</p>}
                        <span>Read More</span>
                    </Link>
                    )}
                </article>
            )
        };

        case "big" as "big": {
            if (!link) {
                return <img src={PreviewBig} style={{gridArea: grid}} className="loading"/>
            }
            return (
                <article className="post-link" style={{gridArea: grid, width: "100%"}}>
                    <Link to={`article/${link}`} className="post-preview-big preview-up">
                        {IMAGE_SRC_MEDIUM && (
                            <>
                                <figure>
                                    <picture>
                                        <img src={IMAGE_SRC_MEDIUM} style={{
                                            margin: "1rem 0 1rem 0",
                                            width: IMAGE_MEDIUM_WIDTH,
                                            maxWidth: "100%",
                                            alignSelf: "center"
                                        }}/>
                                    </picture>
                                </figure>
                                <figcaption><h2>{title}</h2></figcaption>
                            </>
                        )}
                        {!IMAGE_SRC_MEDIUM && <h2>{title}</h2>}
                        {content && <p>{content}</p>}<span>Read More</span>
                    </Link>
                </article>
            )
        };


        case "small" as "small": {
            if (!link) {
                return <img src={PreviewSmall} style={{gridArea: grid}} className="loading"/>
            }
            return (
                <article className="post-link" style={{gridArea: grid, width: "100%"}}>
                    <Link to={`article/${link}`} className="post-preview-small preview-left">
                            {IMAGE_SRC_SMALL && (
                                <>
                                    <figure>
                                        <picture>
                                            <img src={IMAGE_SRC_SMALL} style={{
                                            margin: "0 0 1rem 0",
                                            width: IMAGE_SMALL_WIDTH
                                        }}/>
                                        </picture>
                                    </figure>
                                    <figcaption><h3>{title}</h3></figcaption>
                                </>
                            )}
                            {!IMAGE_SRC_SMALL && <h3>{title}</h3>}
                            {content && <p>{content}</p>}<span>Read More</span>
                    </Link>
                </article>
            )
        };


        default: {
            return (
                <></>
            )
        };
    }
}