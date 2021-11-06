const express = require("express");
const router = express.Router();
const passport = require("passport");
const multer = require("multer"); // multer for parsing multipart form data (files)
const fse = require("fs-extra");

//Import controllers
const {
  addProduct,
  updateProduct,
  getProducts,
  getProductById,
  getProductsFilterParams,
  searchProducts,
} = require("../controllers/products");

// @route   POST /products
// @desc    Create new product
// @access  Private
router.post(
  "/",
  // passport.authenticate("jwt-admin", { session: false }),
  addProduct
);

// @route   PUT /products/:id
// @desc    Update existing product
// @access  Private
router.put(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  updateProduct
);

// @route   GET /products
// @desc    GET existing products
// @access  Public
router.get("/", getProducts);

// @route   GET /products/filter
// @desc    GET appropriate filtered products
// @access  Public
router.get("/filter", getProductsFilterParams);

// @route   POST /products/search
// @desc    POST appropriate to search query products
// @access  Public
router.post("/search", searchProducts);

// @route   GET /products/:id
// @desc    GET existing product by id
// @access  Public
router.get("/:itemNo", getProductById);

module.exports = router;
