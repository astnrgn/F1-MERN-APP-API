const express = require("express");
const parser = require("body-parser");
const app = express();

app.use(parser.json());

app.use("/", require("./routers/drivers.js"));

// app.set("port", process.env.PORT || 3000);

// app.listen(
//   app.get("port", () => {
//     console.log(`server running on ${app.get("port")}`);
//   })
// );

app.listen(3000, () => console.log("server running on 3000"));
