import { readPage, constructPage } from "./templateEngine.js";


const frontpage = readPage("./public/pages/frontpage/index.html");
export const frontpagePage = constructPage(frontpage, {
    tabTitle: "Dokumentation | Velkommen",
});



const alle = readPage("./public/pages/overviewpage/overview.html");
export const allePage = constructPage(alle, {
        tabTitle: "Dokumentation | Oversigt",
        cssLinks: `<link rel="stylesheet" href="/pages/overviewpage/overview.css">`
});

const lektion1 = readPage("./public/pages/lektioner/01_Introduction.html");
export const lektion1Page = constructPage(lektion1, {
    tabTitle: "Dokumentation | Lektion 1",
    cssLinks: `<link rel="stylesheet" href="/pages/lektioner/lektioner.css">`
});


