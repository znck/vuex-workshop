import Vue from 'vue'
import Vuex from 'vuex'

import products from './products'

Vue.use(Vuex)

const state = () => ({
  wishlist: [],
  cart: []
})

const actions = {

  removeFromCart ({ commit }, { id }) {
    commit('REMOVE_FROM_CART', id)
  },    

  addToCart ({ commit }, { id }) {
    commit('ADD_TO_CART', id)
  },

  removeFromWishlist ({ commit }, { id }) {
    commit('REMOVE_FROM_WISHLIST', id)
  },

  addToWishlist ({ commit }, { id }) {
    commit('ADD_TO_WISHLIST', id)
  }
}

const getters = {

  wishlist: ({ wishlist }, _, { products: { products } }) => wishlist.map(id => products[id]),

  cart: ({ cart }, _, { products: { products } }) => cart.map(id => products[id])
}

const mutations = {

  ADD_TO_CART (state, id) {
    if (!state.cart.includes(id)) {
      state.cart.push(id)
    }
  },

  REMOVE_FROM_CART (state, id) {
    if (state.cart.includes(id)) {
      const index = state.cart.indexOf(id)

      state.cart.splice(index, 1)
    }
  },

  REMOVE_FROM_WISHLIST (state, id) {
    if (state.wishlist.includes(id)) {
      const index = state.wishlist.indexOf(id)

      state.wishlist.splice(index, 1)
    }
  },

  ADD_TO_WISHLIST (state, id) {
    if (!state.wishlist.includes(id)) {
      state.wishlist.push(id)
    }
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  getters,
  state: state(),

  modules: {
    products
  }
})
