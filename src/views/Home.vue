<template>
  <div class="container">
    <div id="wrap" @click="close" class="wrap"></div>
    <div class="red"></div>
    <div class="black"></div>
    <Menu id="menu" />
    <Main />
    <Cue />
    <div class="menu-mobile">
      <i  @click="toggleMenu" class="icon bx bx-menu"></i>
      <div style="margin:auto" class="logo">
        <h1 class="logo__label">TuneIn</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Main from "../components/Main";
import Menu from "../components/Menu";
import Cue from "../components/Cue";

export default {
  name: "home",
  components: {
    Main,
    Menu,
    Cue
  },
  methods: {
    toggleMenu() {
      let menu = document.getElementById("menu");
      let wrap = document.getElementById("wrap");
      menu.classList.add("open");
      wrap.classList.add("wrap-open");
    },
    close() {
      let wrap = document.getElementById("wrap");
      let menu = document.getElementById("menu");
      wrap.classList.remove("wrap-open");
      menu.classList.remove("open");

    }
  }
};
</script>
