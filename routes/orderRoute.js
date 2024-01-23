const router = require("express").Router();

// product create and get
router.route("/").get(getAllProduct).post(singleCreateProduct);

// product by id single get, update, and delete
router.route("/:id").get(getSingleProduct).put(singleUpdateProduct);

module.exports = router;
