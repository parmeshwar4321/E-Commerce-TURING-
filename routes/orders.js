const router=require('express').Router()
const {getOrdersById,createOrders,getOrdersbyCustomer}=require('../controllers/orders')

router.post('/orders',createOrders)
router.get('/orders/:id',getOrdersById)

router.get('/orders/inCustomers/',getOrdersbyCustomer)
router.get('/orders/shortDetail/:id')


module.exports=router;  