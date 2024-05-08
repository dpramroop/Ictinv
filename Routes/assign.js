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

 

 router.get('/AllAssign',(req,res)=>{
    client.query(`Select * from "assign"`,(err,resp)=>{
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

  router.post('/GetAssign',(req,res)=>{
    client.query(`Select * from "assign" where "${req.body.column}"='${req.body.search}'`,(err,resp)=>{
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

  router.post('/AddAssign',(req,res)=>{
   client.query(`INSERT INTO "assign"("ASSIGNDATE","CLIENTID") VALUES('${req.body.date}','${req.body.cid}') RETURNING *`,(err,resp)=>{
      if(!err)
      { 
         console.log(resp.rows[0].no)
          console.log(req.body.assignitems)
          
         addassignitem(req.body.assignitems,resp.rows[0].no)
      }
      else{
         console.log(err.message)
      }
      client.end;
    })
  })
 
  router.put('/UpdateAssign',(req,res)=>{
   client.query(`UPDATE "assign" SET "ASSIGNDATE"='${req.body.date}',"CLIENTID"='${req.body.cid}' WHERE "no"='${req.body.no}'`,(err,resp)=>{
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

  function addassignitem(aitems,id)
  {
    for (let aitem in aitems)
    {
      
      client.query(`INSERT INTO "assign_item"("assignno","CURRENTASSIGN","REMARK","NAME","SERIALTAG","ITEMID") VALUES('${id}','${aitems[aitem].currentassign}','${aitems[aitem].remark}','${aitems[aitem].name}','${aitems[aitem].serialtag}',${parseInt(aitems[[aitem]].itemid)})`,(err,resp)=>{
         if(!err)
         {
            console.log("sent")
         }
         else{
            console.log(err.message)
         }
         client.end;
       })
         
    }

  }

  function searchserial(serial)
  {
   var serialitem=false
   client.query(`Select * from "assign_item" where "SERIALTAG"='${serial}'`,(err,resp)=>{
      if(!err)
      {
        if(resp.rows.length>0)
         {
            serialitem=true
         }
      }
      else{
         console.log(err.message)
      }
      client.end;
    })
     
         return serialitem
    

  }
