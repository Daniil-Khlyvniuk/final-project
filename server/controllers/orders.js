const Order = require("../models/Order");
const Color = require("../models/Color");
const Size = require("../models/Size");
const ProductVariant = require("../models/ProductVariant");
const sendMail = require("../commonHelpers/mailSender");
const validateOrderForm = require("../validation/validationHelper");
const productAvailibilityChecker = require("../commonHelpers/productAvailibilityChecker");
const subtractProductsFromCart = require("../commonHelpers/subtractProductsFromCart");
const _ = require("lodash");

const uniqueRandom = require("unique-random");
const rand = uniqueRandom(1000000, 9999999);

exports.placeOrder = async (req, res, next) => {
  try {
    let order = _.cloneDeep(req.body);

    order.orderNo = String(rand());
    let cartProducts = [];

    if (req.body.customerId) {
      order.customerId = req.body.customerId;
      cartProducts = await subtractProductsFromCart(order.customerId);
    }

    if (
      (!req.body.products || req.body.products.length < 1) &&
      cartProducts.length < 1
    ) {
      res
        .status(400)
        .json({ message: "The list of products is required, but absent!" });
    }

    if (cartProducts.length > 0) {
      order.products = _.cloneDeep(cartProducts);
    } else {
      // order.products = JSON.parse(req.body.products);
      order.products = req.body.products
    }

    order.totalSum = order.products.reduce(
      (sum, cartItem) =>
        sum + cartItem.product.currentPrice * cartItem.cartQuantity,
      0
    );

    const productAvailibilityInfo = await productAvailibilityChecker(
      order.products
    );

    if (!productAvailibilityInfo.productsAvailibilityStatus) {
      res.json({
        message: "Some of your products are unavailable for now",
        productAvailibilityInfo,
      });
    } else {
      const subscriberMail = req.body.email;
      const letterSubject = req.body.letterSubject;
      const letterHtml = req.body.letterHtml;

      const { errors, isValid } = validateOrderForm(req.body);

      // Check Validation
      if (!isValid) {
        return res.status(400).json(errors);
      }

      if (!letterSubject) {
        return res.status(400).json({
          message:
            "This operation involves sending a letter to the client. Please provide field 'letterSubject' for the letter.",
        });
      }

      if (!letterHtml) {
        return res.status(400).json({
          message:
            "This operation involves sending a letter to the client. Please provide field 'letterHtml' for the letter.",
        });
      }
      const newOrder = new Order(order);

      if (order.customerId) {
        newOrder.populate("customerId").execPopulate();
      }

      newOrder
        .save()
        .then(async (order) => {
          const mailResult = await sendMail(
            subscriberMail,
            letterSubject,
            letterHtml,
            res
          );

          for (let item of order.products) {
            const id = item.product._id;
            const { quantity } = item.product;
            const { cartQuantity } = item;
            const newQuantity = quantity - cartQuantity;
            const enabled = newQuantity > 0;

            await ProductVariant.findOneAndUpdate(
              { _id: id },
              {
                quantity: newQuantity,
                enabled: enabled,
              },
              { new: true }
            );
          }

          res.json({ order, mailResult });
        })
        .catch((err) =>
          res.status(400).json({
            message: `Oooops... Server error`,
          })
        );
    }
  } catch (err) {
    res.status(400).json({
      message: `Oooops... Server error`,
    });
  }
};

exports.updateOrder = (req, res, next) => {
  try {
    Order.findOne({ _id: req.params.id }).then(async (currentOrder) => {
      if (!currentOrder) {
        return res
          .status(400)
          .json({ message: `Order with id ${req.params.id} is not found` });
      } else {
        const order = _.cloneDeep(req.body);

        if (req.body.deliveryAddress) {
          // order.deliveryAddress = JSON.parse(req.body.deliveryAddress);
        }

        if (req.body.shipping) {
          // order.shipping = JSON.parse(req.body.shipping);
        }

        if (req.body.paymentInfo) {
          // order.paymentInfo = JSON.parse(req.body.paymentInfo);
        }

        if (req.body.customerId) {
          // order.customerId = req.body.customerId;
        }

        if (req.body.products) {
          // order.products = JSON.parse(req.body.products);

          order.totalSum = order.products.reduce(
            (sum, cartItem) =>
              sum + cartItem.product.currentPrice * cartItem.cartQuantity,
            0
          );

          const productAvailibilityInfo = await productAvailibilityChecker(
            order.products
          );

          if (!productAvailibilityInfo.productsAvailibilityStatus) {
            res.json({
              message: "Some of your products are unavailable for now",
              productAvailibilityInfo,
            });
          }
        }

        const subscriberMail = req.body.email;
        const letterSubject = req.body.letterSubject;
        const letterHtml = req.body.letterHtml;

        const { errors, isValid } = validateOrderForm(req.body);

        // Check Validation
        if (!isValid) {
          return res.status(400).json(errors);
        }

        if (!letterSubject) {
          return res.status(400).json({
            message:
              "This operation involves sending a letter to the client. Please provide field 'letterSubject' for the letter.",
          });
        }

        if (!letterHtml) {
          return res.status(400).json({
            message:
              "This operation involves sending a letter to the client. Please provide field 'letterHtml' for the letter.",
          });
        }

        Order.findOneAndUpdate({ _id: req.params.id }, order, { new: true })
          .populate("customerId")
          .then(async (order) => {
            const mailResult = await sendMail(
              subscriberMail,
              letterSubject,
              letterHtml,
              res
            );

            res.json({ order, mailResult });
          })
          .catch((err) =>
            res.status(400).json({
              message: `Oooops... Server error`,
            })
          );
      }
    });
  } catch (err) {
    res.status(400).json({
      message: `Oooops... Server error`,
    });
  }
};

exports.cancelOrder = (req, res, next) => {
  try {
    Order.findOne({ _id: req.params.id }).then(async (currentOrder) => {
      if (!currentOrder) {
        return res
          .status(400)
          .json({ message: `Order with id ${req.params.id} is not found` });
      } else {
        const subscriberMail = req.body.email;
        const letterSubject = req.body.letterSubject;
        const letterHtml = req.body.letterHtml;

        const { errors, isValid } = validateOrderForm(req.body);

        // Check Validation
        if (!isValid) {
          return res.status(400).json(errors);
        }

        if (!letterSubject) {
          return res.status(400).json({
            message:
              "This operation involves sending a letter to the client. Please provide field 'letterSubject' for the letter.",
          });
        }

        if (!letterHtml) {
          return res.status(400).json({
            message:
              "This operation involves sending a letter to the client. Please provide field 'letterHtml' for the letter.",
          });
        }

        Order.findOneAndUpdate(
          { _id: req.params.id },
          { canceled: true },
          { new: true }
        )
          .populate("customerId")
          .then(async (order) => {
            const mailResult = await sendMail(
              subscriberMail,
              letterSubject,
              letterHtml,
              res
            );

            res.json({ order, mailResult });
          })
          .catch((err) =>
            res.status(400).json({
              message: `Oooops... Server error`,
            })
          );
      }
    });
  } catch (err) {
    res.status(400).json({
      message: `Oooops... Server error`,
    });
  }
};

exports.deleteOrder = (req, res, next) => {
  try {
    Order.findOne({ _id: req.params.id }).then(async (order) => {
      if (!order) {
        return res
          .status(400)
          .json({ message: `Order with id ${req.params.id} is not found.` });
      } else {
        const orderToDelete = await Order.findOne({ _id: req.params.id });

        Order.deleteOne({ _id: req.params.id })
          .then((deletedCount) =>
            res.status(200).json({
              message: `Order witn id "${orderToDelete._id}" is successfully deletes from DB. Order Details: ${orderToDelete}`,
            })
          )
          .catch((err) =>
            res.status(400).json({
              message: `Oooops... Server error`,
            })
          );
      }
    });
  } catch (err) {
    res.status(400).json({
      message: `Oooops... Server error`,
    });
  }
};

exports.getOrders = (req, res, next) => {
  try {
    Order.find({ customerId: req.user.id })
      .populate({
        path: "products.product.size",
        model: Size,
      })
      .populate({
        path: "products.product.color",
        model: Color,
      })
      .populate("customerId")
      .sort({ date: -1 })

      .then((orders) => {
        res.json(orders);
      })
      .catch((err) =>
        res.status(400).json({
          message: `Oooops... Server error`,
        })
      );
  } catch (err) {
    res.status(400).json({
      message: `Oooops... Server error`,
    });
  }
};

exports.getOrder = (req, res, next) => {
  try {
    Order.findOne({ orderNo: req.params.orderNo })
      .populate("customerId")
      .then((order) => res.json(order))
      .catch((err) =>
        res.status(400).json({
          message: `Oooops... Server error`,
        })
      );
  } catch (err) {
    res.status(400).json({
      message: `Oooops... Server error`,
    });
  }
};
