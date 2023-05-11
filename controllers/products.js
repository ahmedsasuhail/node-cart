const products = [];

exports.getProducts = (req, res) => {
  res.render("shop", {
    pageTitle: "Shop",
    products: products,
    path: "/",
  });
};

exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};
