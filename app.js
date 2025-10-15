
import express from "express";
const app = express();


import path from "path";

app.use(express.json());

app.use(express.static("public")) //IDK skal undersøge


app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontend/index.html"))
});

app.get("/l1", (req, res) => {
    res.sendFile(path.resolve("public/frontend/leksioner/leksion1.html"))
})






const PORT = 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log("Something went wrong", error);
        return;
    }
    console.log(`server is running on port:`, PORT);
});