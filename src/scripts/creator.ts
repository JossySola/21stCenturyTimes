import { $PostsChain } from "./data_structures/node";
import { v4 as uuidv4 } from "uuid";
import { getUserlessAuthorization } from "./authorization";


type PostsToFilter = {
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
}[]

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
    return names;
}

const getSubredditPosts = (array: Array<string>) => {
    
    return array.map(async element => {
        const body = await fetch(`https://www.reddit.com/${element}.json`);
        const response = await body.json();

        if (!response.reason || response.reason !== "private") {
            const filter = response.data.children.reduce((previous, current) => {
                if (previous.data.ups > current.data.ups) {
                    return previous;
                } else if (previous.data.ups < current.data.ups) {
                    return current;
                } else {
                    return current;
                }
            });
            return filter.data;
        } else {
            return;
        }
    });
}

const filterUps = (array: PostsToFilter) => {
    console.log(array)
}

const createChainLink = async (str: string, chain: $PostsChain) => {
    let response;
    const params = new URLSearchParams({
        after: "",
        before: "",
        count: "0",
        limit: "15",
        q: `${str}`,
        search_query_id: `${uuidv4()}`,
        show_users: "true",
        sort: "relevance",
        typeahead_active: "false"
    })

    try {
        const body = await fetch("https://oauth.reddit.com/subreddits/search?" + params.toString(), {
            method: "GET",
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("access_token")}`
            },
        });
        response = await body.json();

    } catch (error: any | {From: string, err: string, Code: number | undefined}) {
        console.error({
            From: "access",
            err: error,
            Code: error.cause,
        });
        console.log("Attempting userless authorization...");
        const token = await getUserlessAuthorization();
        const body = await fetch("https://oauth.reddit.com/subreddits/search?" + params.toString(), {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        response = await body.json();
        
    } finally {
        if (response === undefined) console.log("After the first and second attempt, the data couldn't be fetched.");
        if (response) {
            
            const subreddits = getSubredditNames(response);
            const posts = getSubredditPosts(subreddits);
            const filter = filterUps(posts);
            
        }
    }
}

export default createChainLink;