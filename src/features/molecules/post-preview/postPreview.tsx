import React from "react";
import PreviewWithImage from "../../../assets/previewWPic.svg";
import PreviewBig from "../../../assets/previewBig.svg";
import PreviewSmall from "../../../assets/previewSmall.svg";
import "./postPreview.css";

interface PreviewProps {
    POST_ID: string;
    title: string;
    IMAGE_SRC_SMALL?: string;
    IMAGE_SRC_MEDIUM?: string;
    IMAGE_SRC_LARGE?: string;
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
    IMAGE_SRC_MEDIUM,
    IMAGE_SRC_LARGE,
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
                <a href={link} className="post-link" style={{gridArea: grid}}>
                    <article className="post-preview-img preview-up">
                        {IMAGE_SRC_LARGE && <img src={IMAGE_SRC_LARGE} style={{
                            margin: "1rem 0 1rem 0"
                        }}/>}
                        <h2>{title}</h2>
                        {content && <p>{content}</p>}
                        <span>Read More</span>
                    </article>
                    <div style={{
                            width: "100%",
                            height: "3px",
                            borderTop: "1px solid black",
                            borderBottom: "1px solid black",
                            marginTop: "0.5rem"
                    }}></div>
                </a>
            )
        };


        case "big" as "big": {
            if (!link) {
                return <img src={PreviewBig} style={{gridArea: grid}} className="loading"/>
            }
            return (
                <a href={link} className="post-link" style={{gridArea: grid}}>
                    <article className="post-preview-big preview-up">
                        {IMAGE_SRC_MEDIUM && <img src={IMAGE_SRC_MEDIUM} style={{
                            margin: "1rem 0 1rem 0"
                        }}/>}
                        <h2>{title}</h2>
                        {content && <p>{content}</p>}<span>Read More</span>
                    </article>
                </a>
            )
        };


        case "small" as "small": {
            if (!link) {
                return <img src={PreviewSmall} style={{gridArea: grid}} className="loading"/>
            }
            return (
                <a href={link} className="post-link" style={{gridArea: grid}}>
                    <article className="post-preview-small preview-left">
                        <h3>{title}</h3>
                        {IMAGE_SRC_SMALL && <img src={IMAGE_SRC_SMALL} style={{
                            margin: "1rem 0 1rem 0"
                        }}/>}
                        {content && <p>{content}</p>}<span>Read More</span>
                    </article>
                </a>
            )
        };


        default: {
            return (
                <></>
            )
        };
    }
}