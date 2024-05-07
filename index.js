const {Client} = require('pg')
const express= require("express")
const app=express()
PORT=5000
const itemroute= require('./Routes/Item')
const locationroute= require('./Routes/location')
const clientroute= require('./Routes/clientuser')
const assignroute= require('./Routes/assign')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/Item',itemroute)
app.use('/Location',locationroute)
app.use('/Client',clientroute)
app.use('/Assign',assignroute)

 app.listen(PORT, function(err){
   if (err) console.log("Error in server setup")
   console.log("Server listening on Port", PORT);
})
 
 
