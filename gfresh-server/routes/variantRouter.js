const express = require("express");
const variantRouter = express.Router();
const upload = require("../middlewares/image-uploader.js");
const createVariant = require("../controllers/ProductVariant/createVariant.js");
const updateProductVariant = require("../controllers/ProductVariant/updateProductVariant.js");
const productVariantList = require("../controllers/ProductVariant/productVariantList.js");
const getSingleProductVariant = require("../controllers/ProductVariant/singleProductVariant.js");
const deleteProductVariant = require("../controllers/ProductVariant/deleteProductVariant.js");
const frontendSingleProduct = require("../controllers/ProductVariant/frontend/frontendSingleProduct.js");
const frontendSingleProductVariant = require("../controllers/ProductVariant/frontend/frontend_singleProductVariant.js");

variantRouter.post(
  "/",
  upload.fields([
    { name: "product_image1", maxCount: 1 },
    { name: "product_image2", maxCount: 1 },
    { name: "product_image3", maxCount: 1 },
    { name: "product_image4", maxCount: 1 },
  ]),
  createVariant
);
variantRouter.patch(
  "/:id",
  upload.fields([
    { name: "product_image1", maxCount: 1 },
    { name: "product_image2", maxCount: 1 },
    { name: "product_image3", maxCount: 1 },
    { name: "product_image4", maxCount: 1 },
  ]),
  updateProductVariant
);

variantRouter.get('/detail/:id',frontendSingleProduct)
variantRouter.get('/:parentid/:attr/:attrvalue',frontendSingleProductVariant)
variantRouter.get("/id/:id", productVariantList);
variantRouter.get("/:id", getSingleProductVariant);
variantRouter.delete("/:id", deleteProductVariant);

module.exports = variantRouter;