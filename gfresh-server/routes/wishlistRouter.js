const express = require('express')
const authenticateToken = require('../middlewares/verifytoken')
const itemWishlist = require('../controllers/Wishlist/frontend/itemWishList')
const wishlistList = require('../controllers/Wishlist/wishlistList')
const addTowishlist = require('../controllers/Wishlist/addTowishlist')
const addToCartList = require('../controllers/Wishlist/addToCartList')
const wishlistcount = require('../controllers/Wishlist/frontend/wishlistCount')
const removeWishlist = require('../controllers/Wishlist/frontend/removeWishlist')
const addToCartDelete = require('../controllers/Wishlist/addToCartDelete')
const checkUser = require('../middlewares/checkUser')
const wishlistRouter = express.Router();

wishlistRouter.post('/',authenticateToken,addTowishlist)
wishlistRouter.get('/',wishlistList)
wishlistRouter.get('/wishlistitem',authenticateToken,itemWishlist)
wishlistRouter.get('/addtocartlist',authenticateToken,addToCartList)
wishlistRouter.get('/wishlistcount',checkUser,wishlistcount)
wishlistRouter.post('/removewishlist',authenticateToken,removeWishlist)
wishlistRouter.delete('/:cart_id',addToCartDelete)

module.exports = wishlistRouter