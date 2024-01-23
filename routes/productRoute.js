const router = require("express").Router();
const {
  getAllProduct,
  singleCreateProduct,
  getSingleProduct,
  singleUpdateProduct,
  singleDeleteProduct,
} = require("../controllers/productController");

// product create and get
router.route("/").get(getAllProduct).post(singleCreateProduct);

// product by id single get, update, and delete
router
  .route("/:id")
  .get(getSingleProduct)
  .put(singleUpdateProduct)
  .delete(singleDeleteProduct);

module.exports = router;
