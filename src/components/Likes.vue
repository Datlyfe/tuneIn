<template>
  <div class="Likes fadeIn">
    <div class="header">
      <h3 class="header__label">Favorite Tunes</h3>
    </div>

    <ul class="loved">
      <li v-for="fav in likes" :key="fav.id" class="item">
        <div
          class="cover"
          @click="cue(fav)"
          :style="{
            backgroundImage: `url(${fav.album.cover_medium.replace(
              /^http:\/\/e-cdn-images.deezer.com\//i,
              'https://e-cdns-images.dzcdn.net/'
            )})`
          }"
        ></div>
        <div class="info">
          <span class="title">{{ fav.title }}</span>
          <span class="artist">{{ fav.artist.name }}</span>
          <span @click="removeFav(fav)" class="remove">Remove</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Ebus } from '../Ebus.js'
import { computed } from '@vue/composition-api'

export default {
  name: 'likes',
  setup(_, { root }) {
    const likes = computed(() => {
      return root.$store.state.likes
    })

    const removeFav = song => {
      root.$store.commit('unlike', song)
    }
    const cue = song => {
      Ebus.$emit('newCue', song, false)
    }
    return {
      likes,
      removeFav,
      cue
    }
  }
}
</script>

<style lang="scss" scoped>
.loved {
  margin-top: 20px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
.info {
  font-size: 16px;
  margin: 0 20px;
  overflow: hidden;
  .title,
  .artist {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
  }
  .artist {
    color: silver;
  }
}

.item {
  display: flex;
  align-items: center;
  margin: 15px 10px;
  width: calc(100% / 2 - 20px);
}
.cover {
  flex-shrink: 0;
  height: 80px;
  width: 80px;
  border-radius: 3px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.3s;
  border: 3px solid #dfdfdf;
  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
  }
}
.remove {
  color: #db1d40;
  display: block;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 14px;
}
</style>
