let http = require("http");
let users = [
  { id: 1, name: "jack" },
  { id: 2, name: "luck" },
  { id: 3, name: "king" },
];
let server = http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.url === "/users") {
    res.end(JSON.stringify(users));
  } else {
    res.end("Not Found");
  }
});
server.listen(3001, () => {
  console.log("后端api接口服务器已经启动在3001端口上！");
});
