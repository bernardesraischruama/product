import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {id: 1, name: `salgado frito`, price: 4.5, qty: 100},
    {id: 2, name: 'pão de batata com bacon', price: 5.5, qty: 50},
    {id: 3, name: 'pão de queijo', price: 2.25, qty: 1000},
    {id: 4, name: 'suco de laranja', price: 2.25, qty: 1000}

  ])
  
function getProductById(id) {
  // for (let product of product.value) {
  //  if (product.id == id) 
  // return product 
  //  }
  // }
  // return ()
  return products.value.find((products) => products.id == id)
}

  return { products, getProductById}
})
