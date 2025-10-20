
import path from "path";
import express from "express";
const app = express();




app.use(express.json());

app.use(express.static("public")) //IDK skal undersøge

// ========================= PAGES =====================================
import { frontpagePage, allePage, lektion1Page, lektion2Page, 
        lektion3Page, lektion4Page, lektion5Page, lektion6Page, lektion7Page } from './util/pageUtil.js';



app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/alle", (req, res) => {
    res.send(allePage);
});

app.get("/lektion1", (req, res) => {
    res.send(lektion1Page);
});

app.get("/lektion2", (req, res) => {
    res.send(lektion2Page);
});

app.get("/lektion3", (req, res) => {
    res.send(lektion3Page);
});

app.get("/lektion4", (req, res) => {
    res.send(lektion4Page);
});

app.get("/lektion5", (req, res) => {
    res.send(lektion5Page);
});

app.get("/lektion6", (req, res) => {
    res.send(lektion6Page);
});

app.get("/lektion7", (req, res) => {
    res.send(lektion7Page);
});

// ========================= API =======================================





const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT); 
});