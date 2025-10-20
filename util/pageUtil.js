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

// Lektion pages Måske en måde at putte dem i en mappe og loope igennem dem?
const lektion1 = readPage("./public/pages/lektioner/01_Introduction.html");
export const lektion1Page = constructPage(lektion1, {
    tabTitle: "Dokumentation | Lektion 1",
    cssLinks: `<link rel="stylesheet" href="/pages/lektioner/lektioner.css">`
});

const lektion2 = readPage("./public/pages/lektioner/02_First_Server.html");
export const lektion2Page = constructPage(lektion2, {
    tabTitle: "Dokumentation | Lektion 2",
    cssLinks: `<link rel="stylesheet" href="/pages/lektioner/lektioner.css">`
});

const lektion3 = readPage("./public/pages/lektioner/03_Loop_methods.html");
export const lektion3Page = constructPage(lektion3, {
    tabTitle: "Dokumentation | Lektion 3",
    cssLinks: `<link rel="stylesheet" href="/pages/lektioner/lektioner.css">`
});

const lektion4 = readPage("./public/pages/lektioner/04_HTML_Time.html");
export const lektion4Page = constructPage(lektion4, {
    tabTitle: "Dokumentation | Lektion 4",
    cssLinks: `<link rel="stylesheet" href="/pages/lektioner/lektioner.css">`
});

const lektion5 = readPage("./public/pages/lektioner/05_Export_Import.html");
export const lektion5Page = constructPage(lektion5, {
    tabTitle: "Dokumentation | Lektion 5",
    cssLinks: `<link rel="stylesheet" href="/pages/lektioner/lektioner.css">`
});

const lektion6 = readPage("./public/pages/lektioner/06_Client_or_Server_Env_Variables.html");
export const lektion6Page = constructPage(lektion6, {
    tabTitle: "Dokumentation | Lektion 6",
    cssLinks: `<link rel="stylesheet" href="/pages/lektioner/lektioner.css">`
});

const lektion7 = readPage("./public/pages/lektioner/07_Server-side_Rendering(SSR)_Routers.html");
export const lektion7Page = constructPage(lektion7, {
    tabTitle: "Dokumentation | Lektion 7",
    cssLinks: `<link rel="stylesheet" href="/pages/lektioner/lektioner.css">`
});


