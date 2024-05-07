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

 

 router.get('/AllLocation',(req,res)=>{
    client.query(`Select * from "location"`,(err,resp)=>{
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

  router.post('/GetLocation',(req,res)=>{
    client.query(`Select * from "location" where "${req.body.column}"='${req.body.search}'`,(err,resp)=>{
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

  router.post('/AddLocation',(req,res)=>{
   client.query(`INSERT INTO "location"("NAME","CONTACTNO") VALUES('${req.body.name}','${req.body.contact}')`,(err,resp)=>{
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
 
  router.put('/UpdateLocation',(req,res)=>{
   client.query(`UPDATE "location" SET "NAME"='${req.body.itemtype}',"CONTACT"='${req.body.contact}' WHERE "id"='${req.body.id}'`,(err,resp)=>{
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