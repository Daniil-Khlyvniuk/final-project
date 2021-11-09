const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CatalogSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parentId: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { strict: false }
);

module.exports = Catalog = mongoose.model("catalogs", CatalogSchema);
