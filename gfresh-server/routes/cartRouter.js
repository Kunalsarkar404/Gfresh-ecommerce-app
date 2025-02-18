const express = require('express')
const authenticateToken = require('../middlewares/verifytoken')
const checkuser = require('../middlewares/checkuser')
const addToCartDelete = require('../controllers/Cart/addToCartDelete')
const updateCartQuantity = require('../controllers/Cart/frontend/updateCartQuantity')
const cartCount = require('../controllers/Cart/frontend/cartCount')
const addToCartlist = require('../controllers/Cart/addToCartlist')
const cartlist = require('../controllers/Cart/cartlist')
const addToCart = require('../controllers/Cart/addToCart')
const cartRouter = express.Router()

cartRouter.post('/',authenticateToken,addToCart)
cartRouter.get('/',cartlist)
cartRouter.get('/addtocartlist',checkuser,addToCartlist)
cartRouter.get('/cartcount',checkuser,cartCount)
cartRouter.post('/updateqty',authenticateToken,updateCartQuantity)
cartRouter.delete('/:cart_id',addToCartDelete)

module.exports = cartRouter