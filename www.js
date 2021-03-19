const http = require("http");
const app = require("./src/app.js");

const server = http.createServer(app);

server.listen(3000, () => {
    console.log("이게 시작됐다는 것은");
    console.log("서버가 열렸다는 뜻!");
});
