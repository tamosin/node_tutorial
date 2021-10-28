const http = require("http");

const serverCallback = (req, res) => {
  if (req.url === "/") {
    res.write("Welcome to homepage!");
    res.end();
  } else if (req.url === "/about") {
    res.write("About page!");
    res.end();
  } else {
    res.write("<h1>404 no such page</h1><a href='/'>back home</a>");
    res.end();
  }
};

const server = http.createServer(serverCallback);
server.listen(5000);
