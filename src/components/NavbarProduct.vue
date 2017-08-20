<template>
  <div class="navbar-item">
    <article class="media">
      <figure class="media-left">
        <img :src="photo" :alt="name">
      </figure>
      <div class="media-content">
        {{ name }} <br>
        <small class="has-text-success">{{ price | currency }}</small>
      </div>
      <figure class="media-right">
        <button class="delete is-small" @click="$emit('remove')"></button>
      </figure>
    </article>
  </div>
</template>

<script>
import { currency } from '../filters'

export default {
  props: {
    name: {
      type: String,
      default: 'Phasellus'
    },

    photo: {
      type: String,
      default: 'http://bulma.io/images/placeholders/128x128.png'
    },

    price: {
      type: Number,
      default: 1.50
    }
  },

  filters: { currency }
}
</script>

<style scoped>
.media {
  margin-right: 2rem;
}

.media-right {
  visibility: hidden;
  transition: all 600ms;
}

.media:hover .media-right {
  visibility: visible;
}

img {
  height: 42px;
  width: 42px;
  max-height: 42px;
  object-fit: cover;
}
</style>

