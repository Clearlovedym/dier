const express =require("express");

const app = express();
app.get("/",(req ,res)=>{
res.send("hello word");
});
app.post("/post", (req, res) => {
    res.send("post方式");
});
app.listen(8080, () => {
    console.log("server is running at http://127.0.0.1:8080");
});