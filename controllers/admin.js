const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product | NodeCart",
    path: "/admin/add-product",
  });
};

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      pageTitle: "Admin Products | NodeCart",
      products: products,
      path: "/admin/products",
    });
  });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(
    req.body.title,
    req.body.imageUrl,
    req.body.price,
    req.body.description
  );
  product.save();
  res.redirect("/");
};
