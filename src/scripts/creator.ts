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
    preview?: {
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

type FormattedArray = {
    ups: number;
    downs: number;
    POST_ID: string;
    USER_ID: string;
    USER_NAME: string;
    USER_IMAGE: string;
    IMAGE_SRC_SMALL: string | undefined;
    IMAGE_SMALL_WIDTH: number | undefined;
    IMAGE_SRC_MEDIUM: string | undefined;
    IMAGE_MEDIUM_WIDTH: number | undefined;
    IMAGE_SRC_LARGE: string | undefined;
    IMAGE_LARGE_WIDTH: number | undefined;
    title: string;
    content: string;
    status: string;
    date: string | Date | null;
    link: string;
    loggedIn: boolean;
    permalink: string;
    num_comments: number;
    url: string;
}[]

type Posts = {
    author: string,
    author_fullname: string,
    downs: number,
    id: string,
    name: string,
    num_comments: number,
    permalink: string,
    preview?: {
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
}


const filterUps = (array: PostsToFilter) => {
    const compare = (a: Posts, b: Posts) => {
        if (a.ups < b.ups) {
            return 1;
        }
        if (a.ups > b.ups) {
            return -1;
        }
        return 0;
    }
    const arr = array.sort(compare);
    
    let final: FormattedArray = [];
    arr.forEach(element => {
        if (element) {
            let small;
            let small_width;
            let medium;
            let medium_width;
            let large;
            let large_width;
            if (element.preview) {
                const dir = element.preview.images[0].resolutions;
                const med = Math.ceil(dir.length/2);
                try {
                    if (dir[1]) {
                        small = dir[1].url;
                        small_width = dir[1].width;
                    } else {
                        small = dir[0].url;
                        small_width = dir[0].width;
                    }

                    if (dir[med]) {
                        medium = dir[med].url;
                        medium_width = dir[med].width;
                    } else {
                        medium = dir[dir.length-1].url;
                        medium_width = dir[dir.length-1].width;
                    }
                    
                    if (dir[dir.length-1]) {
                        large = dir[dir.length-1].url;
                        large_width = dir[dir.length-1].width;
                    }
                    
                } catch (e) {
                    console.log(e)
                }
            }
            
            final.push({
                ups: element.ups,
                downs: element.downs,
                POST_ID: element.id,
                USER_ID: element.author_fullname,
                USER_NAME: element.author,
                USER_IMAGE: "",
                IMAGE_SRC_SMALL: small,
                IMAGE_SMALL_WIDTH: small_width,
                IMAGE_SRC_MEDIUM: medium,
                IMAGE_MEDIUM_WIDTH: medium_width,
                IMAGE_SRC_LARGE: large,
                IMAGE_LARGE_WIDTH: large_width,
                title: element.title,
                content: element.selftext,
                status: "",
                date: "",
                link: element.id,
                loggedIn: false,
                permalink: element.permalink,
                num_comments: element.num_comments,
                url: element.url,
            })
        }
    })
    return final;
}

const getPostsByCommunity = async (community: string) => {
    let response;

    try {
        const body = await fetch(`https://www.reddit.com/r/${community}.json?raw_json=1`);
        response = await body.json();
    } catch (error: any | {From: string, err: string, Code: number | undefined}) {
        console.error({
            From: "access",
            err: error,
            Code: error.cause,
        });
    } finally {
        if (response && !response.error) {
            if (!response.reason || response.reason !== "private") {
                let arr = [];
                response.data.children.forEach(element => arr.push(element.data));
                const newArr = filterUps(arr)
                return newArr;
            }
        }
    }
} 

// **********************************************
const getPostsAbout = async (str: string) => {
    let response;
    const params = new URLSearchParams({
        after: "",
        before: "",
        count: "0",
        limit: "20",
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
            /*
            const subreddits = getSubredditNames(response);
            const posts = await Promise.all(getSubredditPosts(subreddits)).then(value => filterUps(value));
            return posts;
            */
        }
    }
}

export { getPostsByCommunity };