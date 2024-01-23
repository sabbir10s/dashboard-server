const router = require("express").Router();
const {
  getAllCustomer,
  singleCreateCustomer,
  getSingleCustomer,
  singleDeleteCustomer,
  singleUpdateCustomer,
} = require("../controllers/customerController");

// customer create and get
router.route("/").get(getAllCustomer).post(singleCreateCustomer);

// customer by id single get, update, and delete
router
  .route("/:id")
  .get(getSingleCustomer)
  .put(singleUpdateCustomer)
  .delete(singleDeleteCustomer);

module.exports = router;
