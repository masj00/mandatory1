import { readPage, constructPage } from "./templateEngine.js";


const frontpage = readPage("./public/pages/frontpage/index.html");
export const frontpagePage = constructPage(frontpage, {
    tabTitle: "Documentation | Welcome"
});


/*
const matches = readPage("./public/pages/matches/matches.html");
export const matchesPage = constructPage(matches, {
    cssLinks: `<link rel="stylesheet" href="/pages/matches/matches.css">`
});
*/

