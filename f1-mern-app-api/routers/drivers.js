const express = require("express");
const router = express.Router();
const driverController = require("../controllers/drivers.js");

router.get("/", driverController.index);
router.post("/", driverController.create);
router.put("/:id", driverController.update);
router.delete("/:id", driverController.delete);

module.exports = router;
