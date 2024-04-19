import { filterRedditPrefix } from "./filter_prefixes";

export default async function getComments (permalink: string) {
    let response;
    try {
        const body = await fetch(`https://www.reddit.com${permalink}.json`);
        response = await body.json();
    } catch (e) {
        console.error(e);
    } finally {
        if (response) {
            let firstTree = [];
            for (let m of response) {
                filterRedditPrefix(m, firstTree)
            }
            let secondTree = [];
            for (let o of firstTree) {
                filterRedditPrefix(o, secondTree)
            }
            return secondTree;
        }
    }
}