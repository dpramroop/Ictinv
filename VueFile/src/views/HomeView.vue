
<template>
  <main>
  <h1>{{ counter.count }}</h1>
  <h3>{{counter.doubleCount}}</h3>
  <button @click="counter.increment">ClickMe</button>
  <ItemForm></ItemForm>
  <h3>{{item.allitems.length+1}}</h3>
  <table class="itemtable">
   
    <tr :key="allitem.id" v-for="allitem in item.allitems" class="allitems">
    <td v-for="intiem in allitem">{{ intiem }}</td>
   <td><button>{{item.allitems.length}}</button></td>
    </tr>
  
  </table>
  
  </main>
 
</template>

<script setup>
import ItemForm from './UpdateItemForm.vue';
import { useCounterStore } from '@/stores/counter';
import { useitemStore } from '@/stores/item';
const counter =useCounterStore()
const item=useitemStore()
item.fetchallitems()

</script>

<style scoped>
.allitems {
 
  list-style-type: none;
 
}
.allitems td{
  padding: 20px;
}
.itemtable{
  border-spacing: 0px;
}
.itemtable :hover{
  background-color: aqua;
  border-spacing: 0px;
}
</style>