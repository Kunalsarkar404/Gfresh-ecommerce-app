const express = require('express')
const authenticateToken = require('../middlewares/verifytoken.js');
const addresslist = require('../controllers/Address/addresslist.js');
const addresssingle = require('../controllers/Address/address_single.js');
const deleteAddress = require('../controllers/Address/deleteAddress.js');
const createAddress = require('../controllers/Address/createAddress.js');
const updateAddress = require('../controllers/Address/updateAddress.js');
const frontend_addresslist = require('../controllers/Address/frontend/frontend_addresslist.js');
const addressRouter = express.Router();


addressRouter.get('/',addresslist)
addressRouter.get('/userid',authenticateToken,frontend_addresslist)
addressRouter.get('/:id',addresssingle)
addressRouter.delete('/:id',deleteAddress)
addressRouter.post('/',authenticateToken,createAddress)
addressRouter.patch('/:id',authenticateToken,updateAddress)


module.exports = addressRouter;