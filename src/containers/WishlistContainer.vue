<template>
  <NavbarDropdown label="WishList" icon="heart">
    <div class="navbar-item">
      Display wishlist here!
    </div>

    <NavbarProduct />
    <NavbarProduct />
  </NavbarDropdown>
</template>

<script>
import { NavbarDropdown, NavbarProduct } from '../components'

export default {
  components: { NavbarDropdown, NavbarProduct }
}
</script>
