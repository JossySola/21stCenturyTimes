import { getPostsByCommunity } from "../creator";

async function newsLoader() {
    const posts = await getPostsByCommunity("worldnews");
    return posts;
  }
async function astronomyLoader() {
    const posts = await getPostsByCommunity("Astronomy");
    return posts;
}
async function scienceLoader() {
    const posts = await getPostsByCommunity("science");
    return posts;
}
async function healthLoader() {
    const posts = await getPostsByCommunity("health");
    return posts;
}
async function technologyLoader() {
    const posts = await getPostsByCommunity("technews");
    return posts
}

export {newsLoader, astronomyLoader, scienceLoader, healthLoader, technologyLoader}