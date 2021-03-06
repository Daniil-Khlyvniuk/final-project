const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const fileUpload = require("express-fileupload");
var cors = require("cors");
const path = require("path");
require("dotenv").config();

const globalConfigs = require("./routes/globalConfigs");
const customers = require("./routes/customers");
const catalog = require("./routes/catalog");
const products = require("./routes/products");
const colors = require("./routes/colors");
const sizes = require("./routes/sizes");
const filters = require("./routes/filters");
const subscribers = require("./routes/subscribers");
const cart = require("./routes/cart");
const orders = require("./routes/orders");
const links = require("./routes/links");
const pages = require("./routes/pages");
const slides = require("./routes/slides");
const wishlist = require("./routes/wishlist");
const shippingMethods = require("./routes/shippingMethods");
const paymentMethods = require("./routes/paymentMethods");
const partners = require("./routes/partners");
const mainRoute = require("./routes/index");
const favorites = require("./routes/favorites");

const app = express();

app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// DB Config
// const db = require("./config/keys").mongoURI;
const db = require("./config/keys").mongoURI;
// Connect to MongoDB

// Passport middleware
app.use(passport.initialize());

app.use(fileUpload({}));
app.use(express.static("static"));

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/configs", globalConfigs);
app.use("/api/favorites", favorites);
app.use("/api/customers", customers);
app.use("/api/catalog", catalog);
app.use("/api/products", products);
app.use("/api/colors", colors);
app.use("/api/sizes", sizes);
app.use("/api/filters", filters);
app.use("/api/subscribers", subscribers);
app.use("/api/cart", cart);
app.use("/api/orders", orders);
app.use("/api/links", links);
app.use("/api/pages", pages);
app.use("/api/slides", slides);
app.use("/api/wishlist", wishlist);
app.use("/api/shipping-methods", shippingMethods);
app.use("/api/payment-methods", paymentMethods);
app.use("/api/partners", partners);
app.use("/", mainRoute);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
// "mongodb+srv://forTest:forTest@cluster0.eeiyv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const port = process.env.PORT || 5000;
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => console.error(err));
