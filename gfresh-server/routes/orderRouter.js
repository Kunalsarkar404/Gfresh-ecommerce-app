const express = require('express')

const createOrder = require('../controllers/Order/createOrder')
const authenticateToken = require('../middlewares/verifytoken')
const orderlist = require('../controllers/Order/orderlist')
const orderlistbyuser = require('../controllers/Order/orderlist_by_user')
const getSingleOrder = require('../controllers/Order/single_order')
const checkUser = require('../middlewares/checkUser')
const cartCount = require('../controllers/Cart/frontend/cartCount')
const updateorderstatus = require('../controllers/Order/update_order_status')
const addToCartDelete = require('../controllers/Cart/addToCartDelete')
const orderRouter = express.Router()

orderRouter.post('/',authenticateToken,createOrder)
orderRouter.get('/',orderlist)
orderRouter.get('/orderbyuser',authenticateToken,orderlistbyuser)
orderRouter.get('/:id',getSingleOrder)
orderRouter.get('/cartcount',checkUser,cartCount)
orderRouter.post('/changestatus/:id',updateorderstatus)
orderRouter.delete('/:cart_id',addToCartDelete)

module.exports = orderRouter