const {Client} = require('pg')
const express= require("express")
const router=express.Router()
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'ICTint',
    password: 'paul!588(',
    port: 5432,
  })
 client.connect();

 

 router.get('/AllClientuser',(req,res)=>{
    client.query(`Select * from "clientuser"`,(err,resp)=>{
       if(!err)
       {
          res.json(resp.rows)
       }
       else{
          console.log(err.message)
       }
       client.end;
     })
  })

  router.post('/GetClientuser',(req,res)=>{
    client.query(`Select * from "clientuser" where "${req.body.column}"='${req.body.search}'`,(err,resp)=>{
        if(!err)
        {
           res.json(resp.rows)
        }
        else{
           console.log(err.message)
        }
        client.end;
      })
  })

  router.post('/AddClientuser',(req,res)=>{
   client.query(`INSERT INTO "clientuser"("FNAME","LNAME","POSITION","DEPARTMENT","LOCATION_ID") VALUES('${req.body.fname}','${req.body.lname}','${req.body.position}','${req.body.department}','${req.body.locationid}')`,(err,resp)=>{
      if(!err)
      {
         res.send("sent")
      }
      else{
         console.log(err.message)
      }
      client.end;
    })
  })
 
  router.put('/UpdateClientuser',(req,res)=>{
   client.query(`UPDATE "clientuser" SET "FNAME"='${req.body.fname}',"LNAME"='${req.body.lname}',"POSITION"='${req.body.position}',"DEPARTMENT"='${req.body.department}', "LOCATION_ID"='${req.body.locationid}' WHERE "id"='${req.body.id}'`,(err,resp)=>{
      if(!err)
      {
         res.send("updated")
      }
      else{
         console.log(err.message)
      }
      client.end;
    })
  })


  module.exports= router