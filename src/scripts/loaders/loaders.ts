import { getPostsByCommunity } from "../creator";

async function newsLoader() {
    const posts = await getPostsByCommunity("worldnews");
    if (posts) {
        return posts;
    } else {
        return null;
    }
  }
async function astronomyLoader() {
    const posts = await getPostsByCommunity("space");
    if (posts) {
        return posts;
    } else {
        return null;
    }
}
async function scienceLoader() {
    const posts = await getPostsByCommunity("science");
    if (posts) {
        return posts;
    } else {
        return null;
    }
}
async function healthLoader() {
    const posts = await getPostsByCommunity("health");
    if (posts) {
        return posts;
    } else {
        return null;
    }
}
async function technologyLoader() {
    const posts = await getPostsByCommunity("technews");
    if (posts) {
        return posts;
    } else {
        return null;
    }
}

export {
    newsLoader, 
    astronomyLoader, 
    scienceLoader, 
    healthLoader, 
    technologyLoader
}