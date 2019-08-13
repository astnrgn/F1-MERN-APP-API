const express = require("express");
const parser = require("body-parser");
const app = express();

app.use(parser.json());

app.use(require("./routers/index.js"));

app.listen(3001, () => console.log("server running on 3001"));
