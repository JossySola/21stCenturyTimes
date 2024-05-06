import { getAuthorization } from "../authorization";

const setVote = (id: string, dir: number) => {
    const url = "https://oauth.reddit.com/api/vote";
    const payload = {
        method: 'POST',
        body: new URLSearchParams({
            dir: `${dir}`,
            id,
            rank: "2",
            "uh / X-Modhash header": ""
        })
    }
    
}

export default setVote;