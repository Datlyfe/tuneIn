<template>
  <div class="main">
    <component :is="currentView" />
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
export default {
  setup(_, { root }) {
    const currentView = computed(() => {
      return root.$store.state.currentView
    })
    return {
      currentView
    }
  }
}
</script>
