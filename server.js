let http = require("http");
let users = [
  { id: 1, name: "jack1" },
  { id: 2, name: "luck2" },
  { id: 3, name: "king3" },
];
let server = http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.url === "/users") {
    res.end(JSON.stringify(users));
  } else {
    res.end("Not Found");
  }
});
server.listen(3000, () => {
  console.log("后端api接口服务器已经启动在3000端口上！");
});
