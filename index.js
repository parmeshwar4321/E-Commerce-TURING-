const express=require('express')
const app=express()
require('dotenv').config()
// const bodyparser=require('body-parser')

// require('./database/turingdb')  
app.use(express.json())
app.use('/',require('./routes/attributes'))
app.use('/',require('./routes/departments'))
app.use('/',require('./routes/tax'))
app.use('/',require('./routes/shipping'))


const Port=process.env.PORT||2021
app.listen(Port,()=>{
    console.log(`SERVER IS RUNNING AT PORT ${Port}`);
})