<template>
  <Navbar title="Dummy Store">
    <NavbarDropdown label="WishList" icon="heart">
      <div class="navbar-item">
        Display wishlist here!
      </div>

      <NavbarProduct />
      <NavbarProduct />
    </NavbarDropdown>

    <NavbarDropdown label="Cart" icon="shopping-cart">
      <div class="navbar-item">
        Display cart here!
      </div>

      <NavbarProduct />
      <NavbarProduct />
    </NavbarDropdown>
  </Navbar>
</template>

<script>
import { Navbar, NavbarDropdown, NavbarProduct } from '../components'

export default {
  name: 'NavbarContainer',
  components: { Navbar, NavbarDropdown, NavbarProduct }
}
</script>