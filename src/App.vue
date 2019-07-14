<template>
  <div class="app">
    <Home />
  </div>
</template>

<script>
import "./sass/app.scss";
import Home from "./views/Home";
export default {
  name: "app",
  components: {
    Home
  }
};
</script>
