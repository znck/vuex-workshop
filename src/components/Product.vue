<template>
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="photo" :alt="name">
    </figure>
  </div>
  <div class="card-content">
    <div class="content">
      <p class="title">{{ name }}</p>
      {{ description }}
      <br>
      Price: <small class="has-text-success">{{ price | currency }}</small>
    </div>
  </div>

  <footer class="card-footer">
    <a class="card-footer-item" @click="$emit('wishlist')">
      <span class="icon">
        <i class="fa" :class="[inWishlist ? 'fa-heart' : 'fa-heart-o']"></i>
      </span> {{ inWishlist ? 'Save to wishlist' : 'In wishlist' }}
    </a>

    <a class="card-footer-item" @click="$emit('cart')">
      <span class="icon">
        <i class="fa" :class="[inCart ? 'fa-shopping-cart' : 'fa-cart-plus']"></i>
      </span> {{ inCart ? 'Remove' : 'Add to cart' }}
    </a>
  </footer>
</div>
</template>

<script>
import { currency } from '../filters'

export default {
  props: {
    name: {
      type: String,
      required: true
    },

    photo: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    inWishlist: {
      type: Boolean,
      default: false,
      required: true
    },

    inCart: {
      type: Boolean,
      default: false,
      required: true
    }
  },

  filters: { currency }
}
</script>

<style scoped>
.title {
  text-transform: capitalize;
}
</style>

