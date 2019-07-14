<template>
  <div class="container">
    <div id="wrap" @click="close" class="wrap"></div>
    <div class="red"></div>
    <div class="black"></div>
    <Menu id="menu" />
    <Main />
    <Cue />
    <div class="menu-mobile">
      <box-icon @click="toggleMenu" class="icon" color="#f5f5f5" size="50px" name="menu-alt-left"></box-icon>
      <div style="margin:auto" class="logo">
        <img class="logo__img" src="@/assets/img/logo.png" alt="Logo" />
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
