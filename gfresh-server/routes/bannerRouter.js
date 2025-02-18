const express = require('express')
const CartRouter = express.Router()
const upload = require('../middlewares/image-uploader.js');
const createbanner = require('../controllers/banner/createbanner');
const bannerlist = require('../controllers/banner/bannerlist.js');
const bannersingle = require('../controllers/banner/bannersingle.js');
const deletebanner = require('../controllers/banner/deletebanner.js');
const updatebanner = require('../controllers/banner/updatebanner.js');

CartRouter.post('/', upload.single('banner'), createbanner);
CartRouter.patch('/:id', upload.single('banner'), updatebanner);
CartRouter.get('/',bannerlist);
CartRouter.get('/:id',bannersingle);
CartRouter.delete('/:id',deletebanner);
CartRouter.patch('/:id',upload.fields('/:id'), upload.single('banner'), updatebanner);

module.exports = CartRouter