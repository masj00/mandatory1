
import path from "path";
import express from "express";
const app = express();




app.use(express.json());

app.use(express.static("public")) //IDK skal undersøge

// ========================= PAGES =====================================
import { frontpagePage, allePage } from './util/pageUtil.js';



app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/alle", (req, res) => {
    res.send(allePage);
});

// ========================= API =======================================





const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT); 
});