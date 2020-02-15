<template>
  <div class="app">
    <div class="container">
      <div class="red"></div>
      <div class="black"></div>
      <Menu />
      <Main />
      <Cue />
    </div>
  </div>
</template>

<script>
import Main from '@/components/Main'
import Menu from '@/components/Menu'
import Cue from '@/components/Cue'
export default {
  name: 'app',
  components: {
    Cue,
    Menu,
    Main
  }
}
</script>
