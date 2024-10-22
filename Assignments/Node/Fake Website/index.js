const express = require("express");

const PORT = 8191;
const BASE_PATH = path.join(__dirname, "public");

app.get("/facebook", (req, res) => {
  res.sendFile(path.join(BASE_PATH, "facebook.html"));
  res.end();
});

server.listen(PORT);
