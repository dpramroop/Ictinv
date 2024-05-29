



<template>
 <div>
<Items :items="itemsdata"></Items>
   


 </div>   


</template>
<script >
import Items from './Items.vue'
export default{
    name:'ItemTemplate',
    props:{
        itemsdata:Array
    }
    ,
    components:{
        Items
    }
}


</script>