const router = require("express").Router();
const {
  getAllCoupon,
  singleCreateCoupon,
  getSingleCoupon,
  singleUpdateCoupon,
  singleDeleteCoupon,
} = require("../controllers/couponController");

// coupon create and get
router.route("/").get(getAllCoupon).post(singleCreateCoupon);

// coupon by id single get, update, and delete
router
  .route("/:id")
  .get(getSingleCoupon)
  .put(singleUpdateCoupon)
  .delete(singleDeleteCoupon);

module.exports = router;
