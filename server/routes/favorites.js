const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  getFavorites,
  toggleProductInFavorites,
  getFavoritesIds,
} = require("../controllers/favorites");

router.post(
  "/:productId",
  passport.authenticate("jwt", { session: false }),
  toggleProductInFavorites
);

router.get("/", passport.authenticate("jwt", { session: false }), getFavorites);

router.get(
  "/ids",
  passport.authenticate("jwt", { session: false }),
  getFavoritesIds
);

module.exports = router;
