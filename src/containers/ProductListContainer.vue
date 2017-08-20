<template>
  <div class="container">
    <div class="columns is-multiline">
      <div v-for="product in products" :key="product.id" 
        class="column is-half-tablet is-one-third-desktop">
        <Product v-bind="product"
          @cart="hadleAddToCart(product)"
          @wishlist="hadleAddToWishlist(product)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Product } from '../components'

export default {
  components: { Product },
  methods: {
    ...mapActions('products', ['fetchProducts']),
    ... mapActions([
      'addToCart',
      'removeFromCart',
      'addToWishlist',
      'removeFromWishlist'
    ]),
    hadleAddToWishlist (product) {
      if (product.inWishlist) this.removeFromWishlist(product)
      else this.addToWishlist(product)
    },
    hadleAddToCart (product) {
      if (product.inCart) this.removeFromCart(product)
      else this.addToCart(product)
    }
  },
  computed: {
    ...mapGetters('products', ['products'])
  },
  created () {
    this.fetchProducts()
  }
}
</script>
