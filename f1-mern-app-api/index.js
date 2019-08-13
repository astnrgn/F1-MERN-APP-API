const express = require("express");
const parser = require("body-parser");
const app = express();

app.use(parser.json());

app.use(require("./routers/index.js"));

app.set("port", process.env.PORT || 3001);

app.listen(
  app.get("port", () => {
    console.log(`server running on ${app.get("port")}`);
  })
);
