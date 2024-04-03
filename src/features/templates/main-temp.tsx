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
    onSubmit: () => any
};

export default function Template ({data, onChange, onSubmit}: Props): React.JSX.Element {
    
    const displayPreviews = (array: Array<Instances>): React.JSX.Element => {
        let jsx = [];
        let count = 0;

        if (!array.length) {
            while (count < 12) {
                if (count === 0) {
                    jsx.push(<PostPreview style="big image" grid="primary" POST_ID="" title="" link="" key={`loading${count}`}/>)
                    count++;
                    continue;
                } else if (count === 3) {
                    jsx.push(<PostPreview style="big" grid="secondary" POST_ID="" title="" link="" key={`loading${count}`}/>)
                    count++;
                    continue;
                }
                jsx.push(<PostPreview style="small" grid={`a${count}`} POST_ID="" title="" link="" key={`loading${count}`}/>)
                count++;
            }
            return (
                <>
                    {jsx}
                </>
            )
        }
        
        for (count; count < array.length; count++) {
            if (count === 0) {
                jsx.push(<PostPreview style="big image" grid="primary" POST_ID={array[count].POST_ID} title={array[count].title} IMAGE_SRC={array[count].IMAGE_SRC} content={array[count].content} link={array[count].link} key={count} />)
            } else if (count === 3) {
                jsx.push(<PostPreview style="big" grid="secondary" POST_ID={array[count].POST_ID} title={array[count].title} IMAGE_SRC={array[count].IMAGE_SRC} content={array[count].content} link={array[count].link} key={count} />)
            } else {
                jsx.push(<PostPreview style="small" grid={`a${count}`} POST_ID={array[count].POST_ID} title={array[count].title} IMAGE_SRC={array[count].IMAGE_SRC} content={array[count].content} link={array[count].link} key={count} />)
            }
        }
        return (
            <>
                {jsx}
            </>
        )
    }

    return (
        <div className="template">
            <Outlet />
            <h1>21st Century Times</h1>
            <SearchSection onChange={onChange} onSubmit={onSubmit}/>
            {displayPreviews(data)}
            <Footer />
        </div>
    )
}