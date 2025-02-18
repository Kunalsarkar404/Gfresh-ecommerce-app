const express = require('express')
const contactus = require('../controllers/info/contactus.js')
const infoRouter = express.Router()
const upload = require('../middlewares/image-uploader.js');
const webinfo = require('../controllers/info/webinfo.js');
const getwebinfo = require('../controllers/info/getwebinfo.js');
const editwebinfo = require('../controllers/info/editwebinfo.js');
const contactlist = require('../controllers/info/contactlist.js');


infoRouter.get('/contactus',contactlist)
infoRouter.post('/contactus',upload.none(),contactus);
infoRouter.post('/websiteinfo',upload.fields([
    { name: 'logo', maxCount: 1 },
  ]),webinfo);
infoRouter.patch('/websiteinfo',upload.fields([
    { name: 'logo', maxCount: 1 },
  ]),editwebinfo);
  infoRouter.get('/websiteinfo',getwebinfo);

module.exports = infoRouter