<template>
  <div class="welcome">
    <Welcome />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'welcome',
  components: {
    Welcome
  }
}
</script>
