const express = require('express')
const router = express.Router()
const upload = require('../middlewares/image-uploader.js');
const bannerlist = require('../Controllers/banner/bannerlist.js');
const bannersingle = require('../Controllers/banner/bannersingle.js');
const deletebanner = require('../Controllers/banner/deletebanner.js');
const updatebanner = require('../Controllers/banner/updatebanner.js');
const createbanner = require('../controllers/banner/createbanner.js');

router.post('/',upload.single("banner"), createbanner);
router.get('/',bannerlist);
router.get('/:id',bannersingle);
router.delete('/:id',deletebanner);
router.patch('/:id',upload.single("banner"),updatebanner);

module.exports = router