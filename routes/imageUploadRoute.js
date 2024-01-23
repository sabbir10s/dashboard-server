const router = require("express").Router();
const { imageUploader } = require("../controllers/imageUploaderController");

router.post("/", imageUploader);

module.exports = router;
