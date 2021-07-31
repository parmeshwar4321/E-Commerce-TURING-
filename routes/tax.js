const router=require('express').Router()
const knex=require('../database/turingdb')

router.get('/tax',(req,res)=>{

    knex.select('*')
    .from ('tax')
    .then((data)=>{
        console.log(data);
        res.send(data)
    })
    .catch((er)=>{
        console.log(er);
    })
})

router.get('/tax/:id',(req,res)=>{
    knex.select("*")
    .from('tax')
    .where("tax_id", req.params.id)
    .then((data)=>{
        console.log(data);
        res.send(data)
    })
    .catch((er)=>{
        console.log(er);
    })
    
})



module.exports=router;