const router=require('express').Router()
const knex=require('../database/turingdb')

router.get('/attributes',(req,res)=>{

    knex.select('*')
    .from ('attribute')
    .then((data)=>{
        console.log(data);
        res.send(data)
    })
    .catch((er)=>{
        console.log(er);
    })
})

router.get('/attributes/:id',(req,res)=>{
    knex.select("*")
    .from('attribute')
    .where("attribute_id", req.params.id)
    .then((data)=>{
        console.log(data);
        res.send(data)
    })
    .catch((er)=>{
        console.log(er);
    })
    
})



module.exports=router;