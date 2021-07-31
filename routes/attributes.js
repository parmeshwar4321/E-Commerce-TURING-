const router=require('express').Router()

const { getAttributes  ,getAttributesById,getAttributesValueById} = require('../controllers/attributes')

router.get('/attributes',getAttributes)
router.get('/attributes/:id',getAttributesById)
router.get('/attributes/values/:id',getAttributesValueById)


module.exports=router;