<template>
  <div class="main">
    <component :is="currentView" />
  </div>
</template>

<script>
export default {
  computed: {
    currentView() {
      return this.$store.state.currentView
    }
  }
}
</script>
