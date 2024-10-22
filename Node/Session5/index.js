const http = require("http");

const server = http.createServer(async (req, res) => {
  res.write("hello from Endrit");
  res.end();
});

server.listen(8585);
