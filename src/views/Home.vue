<template>
  <div class="container">
   <div class="red"></div>
   <div class="black"></div>
   <Menu/>
   <Main/>
   <Cue/>
  </div>
</template>

<script>
import Main from "../components/Main";
import Menu from "../components/Menu";
import Cue from "../components/Cue";

export default {
  name: 'home',
  components:{
    Main,
    Menu,
    Cue
  }
}
</script>
