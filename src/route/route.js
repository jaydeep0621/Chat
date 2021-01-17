const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const control = require("../controller/controller");
router.use(bodyparser.json());

router.get("/start", control.start);

module.exports = router;