<template>
  <div class="home">
    <Navbar title="Dummy Store">
      <Wishlist />
      <Cart />
    </Navbar>
    <ProductList />
  </div>
</template>

<script>
import { Navbar } from '../components'
import { Wishlist, Cart, ProductList } from '../containers'

export default {
  components: { Navbar, Wishlist, Cart, ProductList }
}
</script>

<style scoped>
.container {
  margin-top: .75em;
}
</style>
