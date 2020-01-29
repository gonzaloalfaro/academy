<template>
  <div class="favorites">
    <Favorites />
  </div>
</template>

<script>
// @ is an alias to /src
import Favorites from '@/components/Favorites.vue'

export default {
  name: 'favorites',
  components: {
    Favorites
  }
}
</script>
