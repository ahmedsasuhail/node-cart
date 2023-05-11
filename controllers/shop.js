const Product = require("../models/product");

exports.getIndex = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      pageTitle: "Home | NodeCart",
      products: products,
      path: "/",
    });
  });
};

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/products", {
      pageTitle: "Products | NodeCart",
      products: products,
      path: "/products",
    });
  });
};

exports.getCart = (req, res) => {
  res.render("shop/cart", {
    pageTitle: "Your Cart | NodeCart",
    path: "/cart",
  });
};

exports.getOrders = (req, res) => {
  res.render("shop/orders", {
    pageTitle: "Orders | NodeCart",
    path: "/orders",
  });
};

exports.getCheckout = (req, res) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout | NodeCart",
    path: "/checkout",
  });
};
