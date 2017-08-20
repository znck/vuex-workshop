<template>
  <NavbarDropdown label="WishList" icon="heart">
    <NavbarProduct
      v-for="product in wishlist"
      :key="product.id"
      v-bind="product"
      @remove="removeFromWishlist(product)" />

    <div class="navbar-item" v-if="wishlist.length === 0">
      No products in wishlist.
    </div>
  </NavbarDropdown>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { NavbarDropdown, NavbarProduct } from '../components'

export default {
  computed: mapGetters(['wishlist']),
  methods: mapActions(['removeFromWishlist']),
  components: { NavbarDropdown, NavbarProduct }
}
</script>
