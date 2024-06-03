import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useitemStore = defineStore('item', () => {
const bmodel =ref("")
const bbrand =ref("")
const bitemtype =ref("")
  const itemtypes=ref("")
 const brands=ref("")
 const allitems=ref()
 const newitemid= ref(0)
  

async function fetchitemtype()
{
  const res= await fetch('http://localhost:5000/Item/GetItemTypes')
    const data= await res.json()
   this.itemtypes= data
   console.log(data)
}

async function fetchbrand()
{
  const res= await fetch('http://localhost:5000/Item/GetBrands')
    const data= await res.json()
   this.brands= data
   console.log(data)
}
async function fetchallitems()
{
  const res= await fetch('http://localhost:5000/Item/Allitems')
    const data= await res.json()
   this.allitems= data
}


async function UpdateItem(e)
{
 e.preventDefault()
  const rdata={itemtype:this.bitemtype,brand:this.bbrand,model:this.bmodel}
  console.log(rdata)
  const res= await fetch('http://localhost:5000/Item/AddItem',{method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ rdata: rdata})})
  this.allitems.push({id:this.allitems.length+1,ITEMTYPE:this.bitemtype,QUANTITY:0,BRAND:this.bbrand,MODEL:this.bmodel})
   this.bitemtype=""
   this.bmodel=""
   this.bbrand=""
   
   
}


async function AddNewItem(e)
{
 e.preventDefault()
  const rdata={itemtype:this.bitemtype,brand:this.bbrand,model:this.bmodel}
  console.log(rdata)
  const res= await fetch('http://localhost:5000/Item/AddItem',{method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ rdata: rdata})})
  this.allitems.push({id:this.allitems.length+1,ITEMTYPE:this.bitemtype,QUANTITY:0,BRAND:this.bbrand,MODEL:this.bmodel})
   this.bitemtype=""
   this.bmodel=""
   this.bbrand=""
   
   
}

  return { itemtypes,fetchitemtype,brands,fetchbrand,bmodel,bbrand,bitemtype,AddNewItem ,allitems,fetchallitems,UpdateItem}
})
