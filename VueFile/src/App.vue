

<template>
   <div>
    <NavBar></NavBar>
   </div>
<div>
    <ItemTemplate :itemsdata="itemdata"></ItemTemplate>
</div>

</template>

<style scoped>

</style>
<script >
import NavBar from './components/NavBar.vue'
import ItemTemplate from './components/ItemTemplate.vue'

export default{
    name:'App',
    components:{
         ItemTemplate,NavBar
    },
    data(){
        return{
            itemdata:[]
        }
        
    },
    methods:{
        async FetchItems()
{
    const res= await fetch('http://localhost:5000/Item/Allitems')
    const data= await res.json()
    return data
}
},
    async created(){
    this.itemdata= await  this.FetchItems()
  
} 
}


</script>