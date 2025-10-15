import { readPage, constructPage } from "./templateEngine.js";


const frontpage = readPage("./public/pages/frontpage/index.html");
export const frontpagePage = constructPage(frontpage, {
    tabTitle: "Documentation | Welcome"
});



const alle = readPage("./public/pages/overviewpage/overview.html");
export const allePage = constructPage(alle, {
        tabTitle: "Documentation | Overview",
        cssLinks: `<link rel="stylesheet" href="/pages/overviewpage/overview.css">`
});


