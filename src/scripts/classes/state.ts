export default class $PostHandler {
    data: {ups: number,
            downs: number,
            POST_ID: string,
            USER_ID: string,
            USER_NAME: string,
            USER_IMAGE: string,
            IMAGE_SRC_SMALL: string,
            IMAGE_SMALL_WIDTH: number,
            IMAGE_SRC_MEDIUM: string,
            IMAGE_MEDIUM_WIDTH: number,
            IMAGE_SRC_LARGE: string,
            IMAGE_LARGE_WIDTH: number,
            title: string,
            content: string,
            status: string,
            date: string | Date,
            link: string,
            loggedIn: boolean,
            permalink: string,
            num_comments: number,
            url: string
        } | {};

    constructor(data = {}) {
        this.data = data;
    }

    setPost = (data) => {
        return this.data = data;
    }

    getPost = () => {
        return this.data;
    }
}