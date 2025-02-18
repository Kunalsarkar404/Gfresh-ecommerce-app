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

routercate.post('/', upload.fields([
    { name: 'category_image', maxCount: 1 },
]), createcategory);
routercate.get('/', categorylist);
routercate.get('/levelone', categorylistlevelone);
routercate.get('/:id', categorysingle);
routercate.get('/frontendcategorylist', getFrontendCategoryList);
routercate.delete('/:id', deleteCategory);
routercate.patch('/:id', upload.fields([
    { name: 'category_image', maxCount: 1 },
]), updateCategory);

module.exports = routercate