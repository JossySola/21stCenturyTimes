export default async function getComments (permalink: string) {
    let response;
    try {
        const body = await fetch(`https://www.reddit.com${permalink}.json`);
        response = await body.json();
    } catch (e) {
        console.log(e);
    } finally {
        if (response) {
            return response[1].data.children;
        }
    }
}