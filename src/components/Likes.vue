<template>
  <div class="Likes fadeIn">
    <div class="header">
      <h3 class="header__label">Favorite Tunes</h3>
    </div>

    <ul class="loved">
      <li v-for="fav in store.likes" :key="fav.id" class="item">
        <div
          class="cover"
          @click="cue(fav)"
          :style="{
            backgroundImage: `url(${getImageUrl(fav.album.cover_medium)})`,
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

<script setup lang="ts">
import { bus } from "@/bus.js";
import { useStore } from "@/store";
import type { Song } from "@/types";
const store = useStore();


const removeFav = (song: Song) => {
  store.unlike(song);
};
const cue = (song: Song) => {
  bus.emit("newCue", song);
};
const getImageUrl = (url: string) => {
  return `https://e-cdns-images.dzcdn.net/images/${url.substring(
    url.indexOf("/cover") + 1
  )}`;
};
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
