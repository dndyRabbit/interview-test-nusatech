const router = require("express").Router();

const userCtrl = require("../controller");

router.post("/submit-name", userCtrl.submitName);

module.exports = router;
