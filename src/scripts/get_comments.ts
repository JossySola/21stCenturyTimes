import { filterRedditPrefix } from "./filter_prefixes";

export default async function getComments () {
    let content;
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            const url = window.location.pathname;
            let parts = url.split("/");
            parts.shift();
            parts.shift();
            const newURL = parts.join("/");
            const permalink = newURL.replace(/.$/, '');
            resolve(permalink)
        }, 1000);
    })

    try {
        prom.then(async (value) => {
            const body = await fetch(`https://www.reddit.com/${value}.json`);
            const response = await body.json();
            if (response) {
                let firstTree = [];
                for (let m of response) {
                    filterRedditPrefix(m, firstTree);
                }
                let secondTree = [];
                for (let o of firstTree) {
                    filterRedditPrefix(o, secondTree)
                }
                console.log(secondTree)
                content = secondTree
                return secondTree;
            }
        }) 
    } catch (e) {
        console.error(e);
    }
    console.log(content)
    return null;
}