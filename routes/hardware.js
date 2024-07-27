// routes/hardware.js

const { Router } = require("express");
const { getHardwares } = require("../controllers/hardware");

const router = Router();

router.get("/", getHardwares);

module.exports = router;
