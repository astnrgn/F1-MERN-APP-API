const express = require("express");
const parser = require("body-parser");
const app = express();

app.use(parser.json());

app.use("/", require("./routers/drivers.js"));

// app.listen(3000, () => console.log("server running on 3000"));

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// heroku config:set DB_URL="mongodb+srv://admin:amrkacsei31@cluster0-escbg.mongodb.net/test?retryWrites=true&w=majority"
