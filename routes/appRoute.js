const { appController } = require("../controllers/appController");
const router = require("express").Router();

router.get("/", appController);

module.exports = router;
