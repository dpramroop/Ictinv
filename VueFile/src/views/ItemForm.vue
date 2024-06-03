<template>
<form @submit="itemstore.AddNewItem">
    <input type="text" placeholder="MODEL" v-model="itemstore.bmodel">
    <input list="brand" placeholder="BRAND" v-model="itemstore.bbrand">
    <input list="itemtype" placeholder="ITEM TYPE" v-model="itemstore.bitemtype">
     <datalist id="itemtype" >
    <option v-for="(itemtype) in itemstore.itemtypes">{{itemtype.ITEMTYPE}}</option>
    </datalist>
    <datalist id="brand" >
    <option v-for="(brand) in itemstore.brands">{{brand.BRAND}}</option>
    </datalist>
    <input type="submit">
</form>
</template>
<script setup>
import { useitemStore } from '@/stores/item';
const itemstore =useitemStore()
itemstore.fetchitemtype()
itemstore.fetchbrand()


</script>