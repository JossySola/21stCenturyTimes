import React from "react";
import { Outlet } from "react-router-dom";
import "./template.css";

import SearchSection from "../organisms/search-section/searchSection";
import Footer from "../molecules/footer/footer";
import CloseButton from "../../assets/bitmap.svg";

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
            }}>
                <img src={CloseButton} className="disclaimer-close-button" alt="Close Button"/>
                <p><b>DISCLAIMER:</b> The posts/articles displayed are owned by their authors and are collected from Reddit. <b>It is not guaranteed the accuracy, integrity, quality or appropriateness of any content</b> transmitted to or through this Web Application.</p>
            </aside>
            
            <main style={{gridArea: "posts"}}>
                <Outlet/>
            </main>
            
            
            <Footer />
        </div>
    )
}