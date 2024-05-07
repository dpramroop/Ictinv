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

 

 router.get('/AllItems',(req,res)=>{
    client.query(`Select * from "item"`,(err,resp)=>{
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

  router.post('/GetItem',(req,res)=>{
    client.query(`Select * from "item" where "${req.body.column}"='${req.body.search}'`,(err,resp)=>{
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

  router.post('/AddItem',(req,res)=>{
   client.query(`INSERT INTO "item"("ITEMTYPE","QUANTITY","MODEL","BRAND","ATTRIBUTE") VALUES('${req.body.itemtype}','${req.body.quantity}','${req.body.model}','${req.body.brand})','${JSON.stringify(req.body.attribute)}')`,(err,resp)=>{
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
 
  router.put('/UpdateItem',(req,res)=>{
   client.query(`UPDATE "item" SET "ITEMTYPE"='${req.body.itemtype}',"QUANTITY"='${req.body.quantity}',"MODEL"='${req.body.model}',"BRAND"='${req.body.brand})', "ATTRIBUTE"='${JSON.stringify(req.body.attribute)}' WHERE "id"='${req.body.id}'`,(err,resp)=>{
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