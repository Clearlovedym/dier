// 导入http模块
const http = require("http");
const path = require("path");
const fs = require("fs");
// 创建服务器
const server = http.createServer();
// 事件监听
server.on('request', (req, res) => {
    // 请求路径
    let pathname = req.url
    pathname = pathname === '/' ? "index.html" : pathname;
    if (pathname !== '/favicon.ico') {

        let filename = path.join(__dirname, "public", pathname);
        fs.readFile(filename,(err, data) => {
            if (err) {
                res.statusCode = 500
                res.end("server internal error");
            } else {
                res.end(data)
            }
        });
    }else{
        pathname=path.join(__dirname, "public", pathname);
    }
 


});
server.listen(8080, () => {
    console.log("server is running at http://127.0.0.1:8080");
});