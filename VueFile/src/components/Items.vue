<template>
<div :key="item.id" v-for="item in items">
<Item :item="item"></Item>
</div>
</template>
<script>
import Item from './Item.vue';

export default{
    name:'Items',

    props:{
        items:Array
    }
,
components:{
    Item
}

}
</script>