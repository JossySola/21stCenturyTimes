import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import "./template.css";

import PostView from "../organisms/post-view/postView";
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
    data: any,
    onChange: () => any,
    onSubmit: () => any,
    grid: "first" | "second"
};

export default function Template ({grid, onChange, onSubmit}: Props): React.JSX.Element {
    const data = useLoaderData();
    
    const displayPreviews = (array: any): React.JSX.Element => {
        let jsx = [];
        let count = 0;
        
        if (array.length === 0 && grid === "second") {
            while (count < 13) {
                jsx.push(<PostPreview POST_ID="" title="" link="" style="small" grid={`a${count+1}`} key={count}/>);
                count++;
            }
        } else if (array.length === 0 && grid === "first") {
            while (count < 13) {
                if (count === 0) {
                    jsx.push(<PostPreview POST_ID="" title="" link="" style="big image" grid={`a${count+1}`} key={count}/>);
                    count++;
                    continue;
                } else if (count === 4) {
                    jsx.push(<PostPreview POST_ID="" title="" link="" style="big" grid={`a${count+1}`} key={count}/>);
                    count++;
                    continue;
                } else {
                    jsx.push(<PostPreview POST_ID="" title="" link="" style="small" grid={`a${count+1}`} key={count}/>);
                    count++;
                    continue;
                }
            }
        } else if (array.length > 0 && grid === "second") {
            while (count < array.length) {
                jsx.push(<PostPreview POST_ID={array[count].POST_ID} title={array[count].title} link={array[count].link} style="small" grid={`a${count+1}`} key={count}/>);
                count++;
            }
        } else if (array.length > 0 && grid === "first") {
            
            while (count < array.length) {
                if (count === 0) {
                    jsx.push(<PostPreview IMAGE_SRC_LARGE={array[count].IMAGE_SRC_LARGE} content={array[count].content} POST_ID={array[count].POST_ID} title={array[count].title} link={array[count].link} style="big image" grid={`a${count+1}`} key={count}/>);
                    count++;
                    continue;
                } else if (count === 3) {
                    jsx.push(<PostPreview IMAGE_SRC_MEDIUM={array[count].IMAGE_SRC_MEDIUM} content={array[count].content} POST_ID={array[count].POST_ID} title={array[count].title} link={array[count].link} style="big" grid={`a${count+1}`} key={count}/>);
                    count++;
                    continue;
                } else {
                    jsx.push(<PostPreview IMAGE_SRC_SMALL={array[count].IMAGE_SRC_SMALL} content={array[count].content} POST_ID={array[count].POST_ID} title={array[count].title} link={array[count].link} style="small" grid={`a${count+1}`} key={count}/>);
                    count++;
                    continue;
                }
            }
        }

        return (
            <>
                {jsx}
            </>
        )
        
    }

    return (
        <div className={`template grid-${grid}`}>
            <Outlet />
            <h1>21st Century Times</h1>
            <SearchSection onChange={onChange} onSubmit={onSubmit}/>
            {displayPreviews(data)}
            <Footer />
        </div>
    )
}