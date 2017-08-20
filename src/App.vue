<template>
  <div class="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import { Navbar } from './containers'

export default {
  components: { Navbar }
}
</script>

<style src="bulma/css/bulma.css"></style>
<style src="font-awesome/css/font-awesome.css"></style>
<style>
.icon {
  margin-right: .4em;
}
</style>