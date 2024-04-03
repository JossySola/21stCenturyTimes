import React from "react";
import "./postPreview.css";

interface PreviewProps {
    POST_ID: string;
    title: string;
    IMAGE_SRC?: string;
    content?: string;
    link: string;
    style: "big image" | "big" | "small";
    grid: string;
}
export default function PostPreview({
    style,
    POST_ID,
    title,
    IMAGE_SRC,
    content,
    link,
    grid,
    ...props
}: PreviewProps): React.JSX.Element {
    
    switch (style) {

        
        case "big image" as "big image": {
            if (!link) {
                return (
                <article className="post-preview post-preview-img-loading" style={{gridArea: grid}}>
                    <div className="loading-preview-header"></div>
                    <div className="loading-preview-img"></div>
                    <div className="loading-preview-paragraph"></div>
                </article>)
            }
            return (
                <a href={link} className="post-link" style={{gridArea: grid}}>
                    <article className="post-preview-img preview-up">
                        <img src={IMAGE_SRC}/>
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
                return (
                <article className="post-preview" style={{gridArea: grid}}>
                    <div className="loading-preview-header"></div>
                    <div className="loading-preview-text"></div>
                    <div className="loading-preview-text"></div>
                    <div className="loading-preview-text"></div>
                </article>)
            }
            return (
                <a href={link} className="post-link" style={{gridArea: grid}}>
                    <article className="post-preview-big preview-up">
                        <h2>{title}</h2>
                        {content && <p>{content}</p>}<span>Read More</span>
                    </article>
                </a>
            )
        };


        case "small" as "small": {
            if (!link) {
                return (
                <article className="post-preview" style={{gridArea: grid}}>
                    <div className="loading-preview-header"></div>
                    <div className="loading-preview-text"></div>
                    <div className="loading-preview-text"></div>
                    <div className="loading-preview-text"></div>
                </article>)
            }
            return (
                <a href={link} className="post-link" style={{gridArea: grid}}>
                    <article className="post-preview-small preview-left">
                        <h3>{title}</h3>
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