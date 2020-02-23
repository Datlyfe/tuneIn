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

<style lang="scss">
$side_min_size: minmax(50px, 1fr);

.container {
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns:
    $side_min_size minmax(225px, 300px) minmax(500px, 800px) minmax(
      225px,
      300px
    )
    $side_min_size;
  grid-template-rows: $side_min_size 744px $side_min_size;
}

.menu-mobile {
  display: none;
}
.wrap {
  display: none;
}

.red {
  grid-area: 1 / 1 / 4 / 4;
  background: #db1d40;
}

.black {
  grid-area: 1 / 4 / 4 / 6;
  background: #232323;
}

.menu {
  grid-area: 2 / 2 / 3 / 3;
  position: relative;
  background: #7e2236;
  padding: 30px 40px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.main {
  position: relative;
  grid-area: 2 / 3 / 3 / 4;
  background: #232323;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 30px 40px;
  scrollbar-color: #c9c9c9 #303030;
  scrollbar-width: thin;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 8px #00000033;
  }
  &::-webkit-scrollbar {
    width: 3px;
    background-color: #303030;
  }
  &::-webkit-scrollbar-thumb {
    background: #c9c9c9;
  }
}

.cue {
  grid-area: 2 / 4 / 3 / 5;
  background: #db1d40;
  overflow: hidden;
  padding: 30px 40px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.work {
  position: absolute;
  top: 40%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  img {
    height: 80px;
  }
  h3 {
    color: silver;
    font-size: 14px;
    text-transform: uppercase;
  }
}

@media only screen and (max-width: 1200px) {
  .container {
    grid-template-columns:
      30px 60px minmax(400px, auto) 280px
      30px;
    grid-template-rows: 30px 1fr 30px;
  }

  .menu {
    padding: 0;
    display: flex;
    flex-direction: column;
    position: relative;
  }
}

@media only screen and (max-width: 800px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr 80px;
  }
  .menu {
    grid-area: 1 / 1 / 2 / -1;
  }

  .main {
    grid-area: 2 / 1 / 3 / -1;
  }

  .cue {
    grid-area: 3 / 1 / 4 / -1;
    padding: 0;
  }
}
</style>
