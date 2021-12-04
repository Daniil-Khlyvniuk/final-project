const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const {
  addProduct,
  updateProduct,
  getProducts,
  getProductsInfo,
  getFilteredVariants,
  getProductsFilterParams,
  getVariantById,
  searchProducts,
  getVariantsByProductId,
  getMinMaxPrice,
} = require("../controllers/products");

// @route   POST /products/images
// @desc    Add images
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
router.get("/minMaxPrice", getMinMaxPrice);
router.get("/filter", getProductsFilterParams);
router.get("/info/:kindOfInfo/:productId", getProductsInfo);
router.get(
  "/variant/:filterParam/:filterParamId/:productId",
  getFilteredVariants
);
router.get("/variant/:productId", getVariantsByProductId);

router.get(
  "/variant/:filterParam/:filterParamId/:productId",
  getFilteredVariants
);
router.get("/:varId", getVariantById);

// @route   GET /products/filter
// @desc    GET appropriate filtered products
// @access  Public

// @route   POST /products/search
// @desc    POST appropriate to search query products
// @access  Public

// router.post("/autocomplete", searchAutocomplete);
router.post("/search", searchProducts);

// @route   GET /products/:id
// @desc    GET existing product by id
// @access  Public
// router.get("/:itemNo", getProductById/\);

module.exports = router;
