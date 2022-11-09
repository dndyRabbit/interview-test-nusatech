const router = require("express").Router();

const userCtrl = require("../controller");

router.post("/submit-name", userCtrl.submitName);
router.get("/get-name", userCtrl.getName);

module.exports = router;
