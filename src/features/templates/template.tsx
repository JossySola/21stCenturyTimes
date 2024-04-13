import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import "./template.css";

import SearchSection from "../organisms/search-section/searchSection";
import PostPreview from "../molecules/post-preview/postPreview";
import Footer from "../molecules/footer/footer";

type Instances = {
    POST_ID: string;
    title: string;
    IMAGE_SRC: string;
    content: string;
    link: string;
};
interface Props {
    data?: any,
    onChange: () => any,
    onSubmit: () => any,
};

export default function Template ({onChange, onSubmit, data}: Props): React.JSX.Element {

    return (
        <div className={`template`}>
            <h1>The 21st Century Times</h1>
            <SearchSection onChange={onChange} onSubmit={onSubmit}/>

            <aside className="disclaimer" id="disclaimer" onClick={(e) => {
                e.preventDefault();
                const disclaimer = document.getElementById("disclaimer");
                disclaimer?.remove();
            }}><button>X</button><p><b>DISCLAIMER:</b> The posts/articles displayed are owned by their authors. As the web application fetches random subreddits and sorts them by the most upvoted ones, the articles MAY include offensive language. It is not guaranteed the accuracy, integrity, quality or appropriateness of any content transmitted to or through this Web Application.</p></aside>
            
            <section style={{gridArea: "posts"}}>
                <Outlet/>
            </section>
            
            
            <Footer />
        </div>
    )
}