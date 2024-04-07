import { v4 as uuidv4 } from "uuid";

// gets any type with [query]
const searchSubreddits = async (query: string) => {
    const access_token: string | null = window.localStorage.getItem("access_token");

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
        q: `${query}`,
        search_query_id: `${uuidv4()}`,
        show_users: "true",
        sort: "relevance",
        typeahead_active: "false"
    })

    try {
        const body = await fetch("https://oauth.reddit.com/subreddits/search?" + params.toString(), payload);
        const response = await body.json();
        console.log(response)
        return response;
    } catch (error: any | {From: string, err: string, Code: number | undefined}) {
        console.error({
            From: "access",
            err: error,
            Code: error.cause,
        });
        return false;
    }
}

// gets communities with [query] in their names
const getSubreddits = async (query: string) => {
    const access_token: string | null = window.localStorage.getItem("access_token");
    const payload = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${access_token}`
        },
        body: new URLSearchParams({
            exact: "false",
            include_over_18: "false",
            include_unadvertisable: "true",
            query,
            search_query_id: `${uuidv4()}`,
            typeahead_active: "false"
        })
    }

    try {
        const body = await fetch("https://oauth.reddit.com/api/search_subreddits", payload);
        const response = await body.json();
        console.log(response);
        return response;
    } catch (error: any | {From: string, err: string, Code: number | undefined}) {
        console.error({
            From: "access",
            err: error,
            Code: error.cause,
        });
        return false;
    }
}

export {searchSubreddits, getSubreddits}