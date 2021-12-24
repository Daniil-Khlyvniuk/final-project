const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Favorites = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "customers",
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "ProductVariant",
        default: [],
      },
    ],
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { strict: false }
);

module.exports = Favorites = mongoose.model(
  "Favorites",
  Favorites,
  "favorites"
);
