const router = require("express").Router();
const {
  getAllAttribute,
  singleCreateAttribute,
  singleUpdateAttribute,
  singleDeleteAttribute,
  getSingleAttribute,
} = require("../controllers/attributeController");

// attribute create and get
router.route("/").get(getAllAttribute).post(singleCreateAttribute);

// attribute by id single get, update, and delete
router
  .route("/:id")
  .get(getSingleAttribute)
  .put(singleUpdateAttribute)
  .delete(singleDeleteAttribute);

module.exports = router;
