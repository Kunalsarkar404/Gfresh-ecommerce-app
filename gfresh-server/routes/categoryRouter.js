const express = require('express')
const routercate = express.Router()
const upload = require('../middlewares/image-uploader.js');
const createcategory = require('../controllers/ProductCategory/createcategory.js');
const categorylist = require('../controllers/ProductCategory/categorylist.js');
const categorylistlevelone = require('../controllers/ProductCategory/categorylist_level_one.js');
const categorysingle = require('../controllers/ProductCategory/categorysingle.js');
const deleteCategory = require('../controllers/ProductCategory/deletecategory.js');
const updateCategory = require('../controllers/ProductCategory/updatecategory.js');
const getFrontendCategoryList = require('../controllers/ProductCategory/frontend_category.js');

routercate.post('/', (req, res, next)=>{
    req.body.imageType = 'category';
    next();
}, upload.single("category_image"), createcategory);
routercate.get('/', categorylist);
routercate.get('/levelone', categorylistlevelone);
routercate.get('/:id', categorysingle);
routercate.get('/frontendcategorylist', getFrontendCategoryList);
routercate.delete('/:id', deleteCategory);
routercate.patch('/:id', (req, res, next) => {
    req.body.imageType = 'category';
    next();
  }, upload.single('category_image'), updateCategory);

module.exports = routercate