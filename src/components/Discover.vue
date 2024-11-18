<template>
  <div class="Discover">
    <!-- Header -->
    <div class="header">
      <h1 class="header__label">Discover</h1>
    </div>
    <!-- Navigation -->
    <nav class="genres">
      <ul class="genres__list">
        <li
          @click="getGenre(genre.playlistId, genre.id)"
          v-for="genre in genres"
          :key="genre.id"
          class="genres__list__item"
          :class="{ active: genreId === genre.id }"
        >
          <span class="genres__list__link">{{ genre.name }}</span>
        </li>
      </ul>
    </nav>
    <!-- feed -->
    <Feed :genreId="genreId" />
  </div>
</template>

<script setup lang="ts">
import Feed from "@/components/Feed.vue";
import genres from "../static/GenresMap";
import { ref } from "vue";
const genreId = ref("132");
const playlistId = ref(2098157264);

const getGenre = (pId: number, gId: string) => {
  playlistId.value = pId;
  genreId.value = gId;
};
</script>

<style lang="scss" scoped>
.genres {
  margin: 30px -8px;
  &__list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    &__item {
      font-size: 15px;
      font-weight: 700;
      text-transform: capitalize;
      color: #8f8f8f;
      margin: 0 10px;
      transition: all 0.2s;
      &:hover {
        color: white;
      }
    }

    &__link {
      cursor: pointer;
    }
  }
}

.active {
  color: #db1d40;
  font-weight: 700;
  &:hover {
    color: #db1d40;
  }
}
</style>
