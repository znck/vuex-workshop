import Vue from 'vue'

const BASE = 'http://localhost:9000/api'

const state = () => ({
  products: {}
})

const actions = {
  async fetchProducts (store) {
    const response = await fetch(`${BASE}/products`)
    const products = await response.json()

    store.commit('PRODUCTS', products)
  }
}

const getters = {
  products: ({ products }, _, { wishlist, cart }) => Object.values(products).map(
    product => ({
      ...product,
      inWishlist: wishlist.includes(product.id),
      inCart: cart.includes(product.id)
    })
  )
}

const mutations = {
  PRODUCTS (state, products) {
    products.forEach(product => {
      Vue.set(state.products, product.id, {
        id: product.id,
        name: product.title,
        description: product.desc,
        photo: product.image,
        price: product.price
      })
    })
  }
}

export default {
  namespaced: true,
  state: state(),
  mutations,
  actions,
  getters
}