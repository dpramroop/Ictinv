<template>
<div class="itemblk">
    <h2>{{item.BRAND}} {{item.MODEL}} {{item.ITEMTYPE}}</h2>
    <h3>QUANTITY: {{item.QUANTITY}}</h3>
</div>
</template>
<script scoped>
export default{
    name:"Item",
    props:{
      item:Object  
    }
}
</script>
<style>
.itemblk{
    justify-content: center;
    background-color: beige;
    margin-block: 10px;
}
</style>