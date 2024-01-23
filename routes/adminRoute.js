const router = require("express").Router();
const {
  getAllAdmin,
  adminSignIn,
  adminSignUp,
  getSingleAdmin,
  singleDeleteAdmin,
  singleCreateAdmin,
  singleUpdateAdmin,
} = require("../controllers/adminController");
const { isAuth } = require("../middleware/auth");

// admin create and get
router.route("/").get(isAuth, getAllAdmin).post(isAuth, singleCreateAdmin);

// admin by id single get, update, and delete
router
  .route("/:id")
  .get(isAuth, getSingleAdmin)
  .put(isAuth, singleUpdateAdmin)
  .delete(isAuth, singleDeleteAdmin);

// admin sing in
router.post("/signIn", adminSignIn);

// admin sing up
router.post("/signUp", adminSignUp);

module.exports = router;
