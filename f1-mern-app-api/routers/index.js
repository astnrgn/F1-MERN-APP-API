const express = require("express");
const router = express.Router();

router.use("/api/drivers", require("./drivers.js"));

module.exports = router;
