const router=require('express').Router()
const knex=require('../database/turingdb')

router.get('/departments',(req,res)=>{

    knex.select('*')
    .from ('department')
    .then((data)=>{
        console.log(data);
        res.send(data)
    })
    .catch((er)=>{
        console.log(er);
    })
})

router.get('/departments/:id',(req,res)=>{
    knex.select("*")
    .from('department')
    .where("department_id", req.params.id)
    .then((data)=>{
        console.log(data);
        res.send(data)
    })
    .catch((er)=>{
        console.log(er);
    })
    
})



module.exports=router;