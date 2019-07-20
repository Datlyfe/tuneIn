<template>
  <div class="Likes animated fadeIn">
    <div class="header">
      <h3 class="header__label">Favorite Tunes</h3>
    </div>

    <div class="loved">
      <ul class="loved__list">
        <li v-for="fav in likes" :key="fav.id" class="loved__item">
          <img
            @click="cue(fav)"
            class="image"
            :src="getSrc(fav.album.cover_medium)"
            alt=""
          />
          <div class="loved__info">
            <span class="title">{{ shorten(fav.title, 16) }}</span>
            <span class="artist">{{ fav.artist.name }}</span>
            <span
              @click="removeFav(fav)"
              style="display:block ;color:red;cursor:pointer"
              >Remove</span
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { shorten } from "../helpers";
import { Ebus } from "../Ebus.js";

export default {
  name: "likes",
  data() {
    return {};
  },
  methods: {
    shorten,
    getSrc(url){
      return url.replace(/^http:\/\//i, 'https://');
    },
    removeFav(song) {
      this.$store.commit("unlike", song);
    },
    cue(song) {
      Ebus.$emit("newCue", song, false);
    }
  },
  computed: {
    likes() {
      return this.$store.state.likes;
    }
  }
};
</script>
