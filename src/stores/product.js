import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {id: 1, name: `salgado frito`, price: 4.5, qty: 100},
    {id: 2, name: 'pão de quijo', price: 2.25, qty: 1000}

  ])

  return { products }
})
