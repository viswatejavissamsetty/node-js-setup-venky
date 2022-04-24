const http = require("http");

const users = [];

const server = http.createServer((req, res) => {
  if (req.url === "/users" && req.method === "GET") {
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url === "/users" && req.method === "POST") {
    req.on("data", (chunk) => {
      const user = JSON.parse(chunk.toString());
      users.push(user);
      //   console.log(JSON.parse(chunk.toString()));
    });
    res.write("Data received");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
