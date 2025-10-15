
import path from "path";
import express from "express";
const app = express();




app.use(express.json());

app.use(express.static("public")) //IDK skal undersøge

// ========================= PAGES =====================================


app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontend/index.html"))
});

app.get("/l1", (req, res) => {
    res.sendFile(path.resolve("public/frontend/leksioner/leksion1.html"))
})

// ========================= API =======================================





const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT); 
});