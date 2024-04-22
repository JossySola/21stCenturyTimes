import { getPostsByCommunity } from "../creator";
import getComments from "../get_comments";

async function newsLoader() {
    const posts = await getPostsByCommunity("worldnews");
    if (posts) posts;
    return null;
  }
async function astronomyLoader() {
    const posts = await getPostsByCommunity("space");
    if (posts) posts;
    return null;
}
async function scienceLoader() {
    const posts = await getPostsByCommunity("science");
    if (posts) posts;
    return null;
}
async function healthLoader() {
    const posts = await getPostsByCommunity("health");
    if (posts) posts;
    return null;
}
async function technologyLoader() {
    const posts = await getPostsByCommunity("technews");
    if (posts) posts;
    return null;
}
async function commentsLoader() {
    const response = await getComments();
    if (response) response;
    return null;
}

export {newsLoader, 
    astronomyLoader, 
    scienceLoader, 
    healthLoader, 
    technologyLoader,
    commentsLoader}