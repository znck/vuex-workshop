<template>
  <div class="container">
    <div class="columns is-multiline">
      <div v-for="i in 9" :key="i" class="column is-half-tablet is-one-third-desktop">
        <Product />
      </div>
    </div>
  </div>
</template>

<script>
import { Product } from '../components'

export default {
  components: { Product }
}
</script>

<style scoped>
.container {
  margin-top: .75em;
}
</style>
