import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const testing=ref()
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
async function test()
{
  const res= await fetch('http://localhost:5000/Item/Allitems')
    const data= await res.json()
   this.testing= data
}
  return { count, doubleCount, increment,testing,  test }
})
