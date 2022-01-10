const ProductVariant = require("../models/ProductVariant");
const Product = require("../models/Product");
const Favorites = require("../models/Favorites");
const ObjectId = require("mongodb").ObjectID;
const _ = require("lodash");
const Color = require("../models/Color");

// exports.toggleProductInFavorites = async (req, res) => {
//   const customerId = req.user.id;
//   const currentProducts = req.params.productId;

//   try {
//     const product = await ProductVariant.findById(currentProducts);
//     if (!product) {
//       res.status(400).json({
//         message: `Product with id ${currentProducts} not found`,
//       });
//     }

//     const fav = await Favorites.findOne({ customerId });

//     const { products } = fav;
//     const cond = products.some((el) =>
//       _.isEqual(el, ObjectId(currentProducts))
//     );

//     let newData = [];

//     if (cond) {
//       newData = products.filter(
//         (el) => !_.isEqual(el, ObjectId(currentProducts))
//       );
//     } else {
//       newData = [...products, currentProducts];
//     }

//     const newFavorites = await Favorites.findOneAndUpdate(
//       { customerId },
//       {
//         products: [...newData],
//       },
//       { new: true }
//     );
//     res.json(newFavorites);
//   } catch (err) {
//     res.status(400).json({
//       message: `Oooops... Server error`,
//     });
//   }
// };

exports.toggleProductInFavorites = async (req, res) => {
  const customerId = req.user.id;
  const currentProducts = req.params.productId;

  try {
    const product = await ProductVariant.findById(currentProducts);
    if (!product) {
      res.status(400).json({
        message: `Product with id ${currentProducts} not found`,
      });
    }

    let newData = [];
    const fav = await Favorites.findOne({ customerId });

    if (fav) {
      let products = fav.products;
      let cond = products.some((el) =>
        _.isEqual(el, ObjectId(currentProducts))
      );

      if (cond) {
        newData = products.filter(
          (el) => !_.isEqual(el, ObjectId(currentProducts))
        );
      } else {
        newData = [...products, currentProducts];
      }
    }
    else {
      newData.push(currentProducts)
    }

    const newFavorites = await Favorites.findOneAndUpdate(
      { customerId },
      {
        products: newData,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    res.json(newFavorites);
  } catch (err) {
    res.status(400).json({
      message: `Oooops... Server error`,
    });
  }
};

exports.getFavorites = async (req, res) => {
  const customerId = req.user.id;

  try {
    const favorites = await Favorites.findOne({ customerId }).populate({
      path: "products",
      populate: {
        path: "product",
      },
    });

    res.json(favorites);
  } catch (err) {
    res.status(400).json({
      message: `Oooops... Server error`,
    });
  }
};

exports.getFavoritesIds = async (req, res) => {
  const customerId = req.user.id;

  try {
    const favorites = await Favorites.findOne({ customerId });
    res.json(favorites);
  } catch (err) {
    res.status(400).json({
      message: `Oooops... Server error`,
    });
  }
};
