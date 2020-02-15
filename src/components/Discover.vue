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
          :class="{ active: genreId == genre.id }"
        >
          <span class="genres__list__link">{{ genre.name }}</span>
        </li>
      </ul>
    </nav>
    <!-- feed -->
    <Feed :genreId="genreId" />
  </div>
</template>

<script>
import Feed from './Feed'
import Genres from '../static/GenresMap'
export default {
  name: 'discover',
  resource: 'Genres',
  components: {
    Feed
  },
  data() {
    return {
      genres: Genres,
      genreId: 132,
      playlistId: 2098157264
    }
  },
  methods: {
    getGenre(playlistId, genreId) {
      this.playlistId = playlistId
      this.genreId = genreId
    }
  }
}
</script>
