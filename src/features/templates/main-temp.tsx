import React from "react";
import { Outlet } from "react-router-dom";
import "./main-temp.css";

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
    data: Array<Instances>,
    onChange: () => any,
    onSubmit: () => any,
    grid: "first" | "second"
};

export default function Template ({data, grid, onChange, onSubmit}: Props): React.JSX.Element {
    
    const displayPreviews = (array: Array<Instances>): React.JSX.Element => {
        let jsx = [];
        let count = 0;

        if (!array.length && grid === "second") {
            while (count < 13) {
                jsx.push(<PostPreview POST_ID="" title="" link="" style="small" grid={`a${count+1}`} key={count}/>);
                count++;
            }
        } else if (!array.length && grid === "first") {
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
        } else if (array && grid === "second") {
            while (count < array.length) {
                jsx.push(<PostPreview POST_ID={array[count].POST_ID} title={array[count].title} link={array[count].link} style="small" grid={`a${count+1}`} key={count}/>);
                count++;
            }
        } else if (array && grid === "first") {
            
            while (count < array.length) {
                if (count === 0) {
                    jsx.push(<PostPreview IMAGE_SRC={array[count].IMAGE_SRC} content={array[count].content} POST_ID={array[count].POST_ID} title={array[count].title} link={array[count].link} style="big image" grid={`a${count+1}`} key={count}/>);
                    count++;
                    continue;
                } else if (count === 3) {
                    jsx.push(<PostPreview content={array[count].content} POST_ID={array[count].POST_ID} title={array[count].title} link={array[count].link} style="big" grid={`a${count+1}`} key={count}/>);
                    count++;
                    continue;
                } else {
                    jsx.push(<PostPreview content={array[count].content} POST_ID={array[count].POST_ID} title={array[count].title} link={array[count].link} style="small" grid={`a${count+1}`} key={count}/>);
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