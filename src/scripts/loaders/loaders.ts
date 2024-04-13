import getPostsAbout from "../creator";

async function newsLoader() {
    const posts = await getPostsAbout("news worldwide");
    return posts;
  }
async function astronomyLoader() {
    const posts = await getPostsAbout("astronomy");
    return posts;
}
async function scienceLoader() {
    const posts = await getPostsAbout("science physics biology");
    return posts;
}
async function healthLoader() {
    const posts = await getPostsAbout("health care");
    return posts;
}
async function technologyLoader() {
    const posts = await getPostsAbout("tech");
    return posts
}

export {newsLoader, astronomyLoader, scienceLoader, healthLoader, technologyLoader}