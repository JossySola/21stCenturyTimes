import React from "react";
import PostPreview from "../../molecules/post-preview/postPreview";
import { Outlet, useLoaderData } from "react-router-dom";
import $Handler from "../../../scripts/classes/state";
import "./posts.css";

type Props = {
    array?: any;
    grid: "first" | "second";
    postHandler?: $Handler;
    commentHandler?: $Handler
}


export default function Posts ({array, grid, postHandler, commentHandler}: Props) {
    // React Router Hook
    const material = array ? array : useLoaderData();

    const displayPreviews = (): React.JSX.Element => {
        let jsx = [];
        let count = 0;
        if (material) {
            if (material.length === 0 && grid === "second") {
                while (count < 13) {
                    jsx.push(<PostPreview POST_ID="" title="" link="" style="small" grid={`a${count+1}`} key={count}/>);
                    count++;
                }
            } else if (material.length === 0 && grid === "first") {
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
            } else if (material.length > 0 && grid === "second") {
                while (count < material.length) {
                    jsx.push(<PostPreview commentHandler={commentHandler} postHandler={postHandler} raw={material[count]} IMAGE_SMALL_WIDTH={material[count].IMAGE_SMALL_WIDTH} IMAGE_SRC_SMALL={material[count].IMAGE_SRC_SMALL} POST_ID={material[count].POST_ID} title={material[count].title} link={material[count].link} style="small" grid={`a${count+1}`} key={count}/>);
                    count++;
                }
            } else if (material.length > 0 && grid === "first") {
                while (count < material.length) {
                    if (count === 0) {
                        jsx.push(<PostPreview commentHandler={commentHandler} postHandler={postHandler} raw={material[count]} IMAGE_LARGE_WIDTH={material[count].IMAGE_LARGE_WIDTH} IMAGE_SRC_LARGE={material[count].IMAGE_SRC_LARGE} content={material[count].content} POST_ID={material[count].POST_ID} title={material[count].title} link={material[count].link} style="big image" grid={`a${count+1}`} key={count}/>);
                        count++;
                        continue;
                    } else if (count === 3) {
                        jsx.push(<PostPreview commentHandler={commentHandler} postHandler={postHandler} raw={material[count]} IMAGE_MEDIUM_WIDTH={material[count].IMAGE_MEDIUM_WIDTH} IMAGE_SRC_MEDIUM={material[count].IMAGE_SRC_MEDIUM} content={material[count].content} POST_ID={material[count].POST_ID} title={material[count].title} link={material[count].link} style="big" grid={`a${count+1}`} key={count}/>);
                        count++;
                        continue;
                    } else {
                        jsx.push(<PostPreview commentHandler={commentHandler} postHandler={postHandler} raw={material[count]} IMAGE_SMALL_WIDTH={material[count].IMAGE_SMALL_WIDTH} IMAGE_SRC_SMALL={material[count].IMAGE_SRC_SMALL} content={material[count].content} POST_ID={material[count].POST_ID} title={material[count].title} link={material[count].link} style="small" grid={`a${count+1}`} key={count}/>);
                        count++;
                        continue;
                    }
                }
            }
        } else {
            jsx.push(<div className="connection-error">
            <p>ERR_ABORTED 500:</p>
            <p>No data received / Failed to fetch / Internet Connection lost</p>
            <p>Possible causes:</p>
            <ul>
                <li>There is a chance the Internet connection is lost, please verify and refresh the page.</li>
                <li>There may be no data for this criteria.</li>
                <li>An Internal Server Error may have occured.</li>
            </ul>
            </div>)
        }
        return (
            <>
                {jsx ? jsx : null}
            </>
        )
        
    }

    return (
        <section className={`posts-panel-${grid}`}>
            {displayPreviews()}
            <Outlet />
        </section>
    )
}