const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("SERVER TOOTAB");
});

app.get("/data", (req, res) => {
  const delta = req.query.delta;
  console.log("DELTA:", delta);
  res.send("OK");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("SERVER READY");
});