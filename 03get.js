// 导入模块
const http = require("http");
const url = require("url");
const server = http.createServer();
server.on("request", (req, res) => {
    let { query } = url.parse(req.url, true);
    console.log(query);
});
server.listen(8080, () => {
    console.log("server is running at http://127.0.0.1:8080");
})