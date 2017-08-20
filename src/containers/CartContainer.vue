<template>
  <NavbarDropdown label="Cart" icon="shopping-cart">
    <NavbarProduct
      v-for="product in cart"
      :key="product.id"
      v-bind="product"
      @remove="removeFromCart(product)" />

    <div class="navbar-item" v-if="cart.length === 0">
      No products in cart.
    </div>
  </NavbarDropdown>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { NavbarDropdown, NavbarProduct } from '../components'

export default {
  components: { NavbarDropdown, NavbarProduct },
  methods: mapActions(['removeFromCart']),
  computed: mapGetters(['cart'])
}
</script>
