const router = require("express").Router();
const {
  getAllCategory,
  singleCreateCategory,
  getSingleCategory,
  singleUpdateCategory,
  singleDeleteCategory,
} = require("../controllers/categoryController");

// category create and get
router.route("/").get(getAllCategory).post(singleCreateCategory);

// category by id single get, update, and delete
router
  .route("/:id")
  .get(getSingleCategory)
  .put(singleUpdateCategory)
  .delete(singleDeleteCategory);

module.exports = router;
