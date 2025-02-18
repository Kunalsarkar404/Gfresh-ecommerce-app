const express = require('express')
const carouselRouter = express.Router()
const newarrival = require('../controllers/Carousel_item/newarrival_item.js');
const bestseller = require('../controllers/Carousel_item/bestseller_list.js');
const featureitem = require('../controllers/Carousel_item/featureitem_list.js');


carouselRouter.get('/newarrival',newarrival)
carouselRouter.get('/bestseller',bestseller)
carouselRouter.get('/featureitem',featureitem)


module.exports = carouselRouter