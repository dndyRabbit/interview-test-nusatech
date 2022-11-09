const http = require("http");
const fs = require("fs");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", require("./router"));

const hostname = "127.0.0.1";
const port = 2300;

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
