import React from "react";
import "./main-temp.css";

import PostView from "../organisms/post-view/postView";
import SearchSection from "../organisms/search-section/searchSection";

import Comments from "../molecules/comments/comments";
import Post from "../molecules/post/post";
import PostPreview from "../molecules/post-preview/postPreview";
import Search from "../molecules/search/search";
import Footer from "../molecules/footer/footer";

interface Props {
    onChange: () => {};
    onSubmit: () => {};
    POST_ID: string;
    title: string;
    IMAGE_SRC: string;
    content: string;
    link: string;
}

export default function Template ({
    onChange, 
    onSubmit,
    POST_ID,
    title,
    IMAGE_SRC,
    content,
    link, 
    ...props}: Props) {
    return (
        <div className="template">
            <h1>21st Century Times</h1>
            <SearchSection onChange={onChange} onSubmit={onSubmit}/>

            <PostPreview style="big image" grid="primary" POST_ID={POST_ID} title={title} IMAGE_SRC={IMAGE_SRC} content={content} link={link}/>

            <PostPreview style="small" grid="a1" POST_ID={POST_ID} title={title} IMAGE_SRC={IMAGE_SRC} content={content} link={link}/>
            <PostPreview style="small" grid="a2" POST_ID={POST_ID} title={title} IMAGE_SRC={IMAGE_SRC} content={content} link={link}/>

            <PostPreview style="big" grid="secondary" POST_ID={POST_ID} title={title} IMAGE_SRC={IMAGE_SRC} content={content} link={link}/>

            <PostPreview style="small" grid="a3" POST_ID={POST_ID} title={title} IMAGE_SRC={IMAGE_SRC} content={content} link={link}/>
            <PostPreview style="small" grid="a4" POST_ID={POST_ID} title={title} IMAGE_SRC={IMAGE_SRC} content={content} link={link}/>
            <PostPreview style="small" grid="a5" POST_ID={POST_ID} title={title} IMAGE_SRC={IMAGE_SRC} content={content} link={link}/>
            <PostPreview style="small" grid="a6" POST_ID={POST_ID} title={title} IMAGE_SRC={IMAGE_SRC} content={content} link={link}/>
            <PostPreview style="small" grid="a7" POST_ID={POST_ID} title={title} IMAGE_SRC={IMAGE_SRC} content={content} link={link}/>
            <PostPreview style="small" grid="a8" POST_ID={POST_ID} title={title} IMAGE_SRC={IMAGE_SRC} content={content} link={link}/>
            <PostPreview style="small" grid="a9" POST_ID={POST_ID} title={title} IMAGE_SRC={IMAGE_SRC} content={content} link={link}/>
            <PostPreview style="small" grid="a10" POST_ID={POST_ID} title={title} IMAGE_SRC={IMAGE_SRC} content={content} link={link}/>

            <Footer />
        </div>
    )
}