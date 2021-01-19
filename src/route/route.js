const express = require("express");
const bodyparser = require("body-parser");
const control = require("../controller/controller");
const router = express.Router();
router.use(bodyparser.json());

router.get("/message", control.start);

module.exports = router;