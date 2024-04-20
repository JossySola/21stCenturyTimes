import avatar from "../assets/avatar/avatar_default_1.png"
const getRandomAvatar = (src: string) => {
    if (!src) {
        const random = Math.floor(Math.random()*7);
        switch (random) {
            case 1:
                return "../assets/avatar/avatar_default_1.png";
                break;
            case 2:
                return "../assets/avatar/avatar_default_2.png";
                break;
            case 3:
                return "../assets/avatar/avatar_default_3.png";
                break;
            case 4:
                return "../assets/avatar/avatar_default_4.png";
                break;
            case 5:
                return "../assets/avatar/avatar_default_5.png";
                break;
            case 6:
                return "../assets/avatar/avatar_default_6.png";
                break;
            case 7:
                return "../assets/avatar/avatar_default_7.png";
                break;
            default:
                return "../assets/avatar/avatar_default_1.png";
        }
    }
    return src;
}

// Use function in Array mapping (Array of Objects)
const filterRedditPrefix = (object: {kind: string, data: {children?: Array<any>}}, array: Array<any>) => {
    
    if (object.kind === 'Listing') {
        const children = object.data.children;
        if (children) {
            children.forEach((e) => {
                array.push(e)
            })
            return array;
        }
        return false;
    }
    if (object.kind === "t3") {
        if (object.data.author !== "[deleted]") {
            
            array.push({
                author: object.data.author,
                author_fullname: object.data.author_fullname,
                downs: object.data.downs,
                id: object.data.id,
                kind: object.kind,
                name: object.data.name,
                num_comments: object.data.num_comments,
                over_18: object.data.over_18,
                permalink: object.data.permalink,
                preview: object.data.preview,
                selftext: object.data.selftext,
                subreddit_id: object.data.subreddit_id,
                title: object.data.title,
                ups: object.data.ups,
                url: object.data.url
            })
            return array;
        }
        return false;
    }
    if (object.kind === "t1") {
        if (object.data.author !== "[deleted]") {
            array.push({
                author: object.data.author,
                author_fullname: object.data.author_fullname,
                body: object.data.body,
                downs: object.data.downs,
                id: object.data.id,
                IMAGE_SRC: getRandomAvatar(),
                kind: object.kind,
                name: object.data.name,
                permalink: object.data.permalink,
                replies: object.data.replies,
                subreddit_id: object.data.subreddit_id,
                ups: object.data.ups
            })
            return array;
        }
        return false;
    }
    
}

export {filterRedditPrefix};