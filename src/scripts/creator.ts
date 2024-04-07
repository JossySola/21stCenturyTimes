import { $PostsChain } from "./data_structures/node";
import { v4 as uuidv4 } from "uuid";
import { getUserlessAuthorization } from "./authorization";

const getSubredditNames = (response: {
    data: {
        children: [{
            data: {
                display_name_prefixed: string;
            }
        }]
    }
}): Array<string> => {
    let names: Array<string> = [];

    response.data.children.map((object) => {
        names.push(object.data.display_name_prefixed);
    })
    console.log(names)
    return names;
}

const getSubredditPosts = (array: Array<string>) => {
    let posts = [];

    array.map(async (subreddit): Promise<void> => {
        let response;

        try {
            const post = await fetch(`https://www.reddit.com/${subreddit}.json`);
            response = await post.json();
            
            if (!response.reason) {
                response.data.children.map((obj) => {
                    const {
                        author,
                        author_fullname,
                        downs,
                        id,
                        name,
                        num_comments,
                        permalink,
                        preview,
                        selftext,
                        title,
                        ups,
                        url,
                    } = obj.data

                    posts.push({
                        author,
                        author_fullname,
                        downs,
                        id,
                        name,
                        num_comments,
                        permalink,
                        preview,
                        selftext,
                        title,
                        ups,
                        url,
                    })
                })
            }
        } catch (error: any | {From: string, err: string, Code: number | undefined}) {
            console.error({
                From: "access",
                err: error,
                Code: error.cause,
            });
        }
    })
    return posts;
}

const filterPosts = (array: [{
    author: string,
    author_fullname: string,
    downs: number,
    id: string,
    name: string,
    num_comments: number,
    permalink: string,
    preview: {
        images: [],
        source: {
            url: string,
            width: number,
            height: number
        }
    },
    selftext: string,
    title: string,
    ups: number,
    url: string,
}]) => {

}

const createChainLink = async (str: string, chain: $PostsChain) => {
    const access_token: string | null = window.localStorage.getItem("access_token");
    let response;

    const payload = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${access_token}`
        },
    }
    const params = new URLSearchParams({
        after: "",
        before: "",
        count: "0",
        limit: "12",
        q: `${str}`,
        search_query_id: `${uuidv4()}`,
        show_users: "true",
        sort: "relevance",
        typeahead_active: "false"
    })

    try {
        const body = await fetch("https://oauth.reddit.com/subreddits/search?" + params.toString(), payload);
        response = await body.json();

    } catch (error: any | {From: string, err: string, Code: number | undefined}) {
        console.error({
            From: "access",
            err: error,
            Code: error.cause,
        });
        console.log("Attempting userless authorization...");
        await getUserlessAuthorization();
        const body = await fetch("https://oauth.reddit.com/subreddits/search?" + params.toString(), payload);
        response = await body.json();
        
    } finally {
        if (response === undefined) console.log("After the first and second attempt, the data couldn't be fetched.");
        const subreddits = getSubredditNames(response);
       //getSubredditPosts(subreddits)

    }
}

export default createChainLink;