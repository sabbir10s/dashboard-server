require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
// internal imports
const databaseConnection = require("../config/dbConnection");
const appRoute = require("../routes/appRoute");
const categoryRoute = require("../routes/categoryRoute");
const adminRoute = require("../routes/adminRoute");
const customerRoute = require("../routes/customerRoute");
const imageUploadRoute = require("../routes/imageUploadRoute");
const { notFoundHandler, errorHandler } = require("../middleware/errorHandler");
const { isAuth } = require("../middleware/auth");

const port = process.env.PORT || 5000;

const app = express();

// global middleware
app.use([
  cors(),
  morgan("dev"),
  express.json(),
  bodyParser.json(),
  express.urlencoded({ extended: true }),
]);
// database connection
databaseConnection();

// ========== all routes =============
app.use("/", appRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/customer", isAuth, customerRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/image-upload", imageUploadRoute);
// ========== all routes =============

// error handling
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
