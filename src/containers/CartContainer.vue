<template>
  <NavbarDropdown label="Cart" icon="shopping-cart">
    <div class="navbar-item">
      Display cart here!
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
