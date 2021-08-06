const router=require('express').Router()
const {getOrdersById,createOrders,getOrdersbyCustomer,getshortdetailsOrdersbyId}=require('../controllers/orders')
// const{authenticateToken} = require('../Auth/jwt')

router.post('/orders',createOrders)

router.get('/orders/:id',getOrdersById) 
router.get('/orders/inCustomers/',getOrdersbyCustomer)
router.get('/orders/shortDetails/:id',getshortdetailsOrdersbyId)


module.exports=router;  