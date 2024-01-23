const router = require("express").Router();
const {
  getAllBanner,
  singleCreateBanner,
  getSingleBanner,
  singleUpdateBanner,
  singleDeleteBanner,
} = require("../controllers/bannerController");

// banner create and get
router.route("/").get(getAllBanner).post(singleCreateBanner);

// banner by id single get, update, and delete
router
  .route("/:id")
  .get(getSingleBanner)
  .put(singleUpdateBanner)
  .delete(singleDeleteBanner);

module.exports = router;
