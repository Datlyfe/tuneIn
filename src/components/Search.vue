<template>
  <div class="search">
    <form @submit="search" class="search__form">
      <input
        v-model="searchTerm"
        type="text"
        class="search__form__field"
        placeholder="Search"
      />
    </form>
    <div v-if="loading" class="signal"></div>
    <div :hidden="loading" class="fadeIn">
      <div v-if="searchResults" class="res__header">
        <h3 class="res__header__label">
          Search results for "{{ staticSearchTerm }}"
        </h3>
      </div>
      <div v-if="searchResults" class="search__results">
        <div v-for="res in searchResults" :key="res.id" class="res">
          <div class="placeholder">
            <div
              @click="cue(res)"
              class="cover"
              :style="{
                backgroundImage: `url(${res.album.cover_small.replace(
                  /^http:\/\/e-cdn-images.deezer.com\//i,
                  'https://e-cdns-images.dzcdn.net/'
                )})`
              }"
            ></div>
          </div>

          <div class="info">
            <span class="title">{{ res.title }}</span>
            <span class="artist">{{ res.artist.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Ebus } from '../Ebus.js'
import apiService from '@/services/api'
import { ref } from '@vue/composition-api'

export default {
  name: 'search',
  setup() {
    const loading = ref(false)
    const searchResults = ref(null)
    const searchTerm = ref('')
    const staticSearchTerm = ref(searchTerm)

    const cue = song => {
      Ebus.$emit('newCue', song, false)
    }

    const search = async e => {
      e.preventDefault()
      loading.value = true
      staticSearchTerm.value = searchTerm.value
      searchResults.value = await apiService.search(searchTerm.value)
      setTimeout(() => {
        loading.value = false
      }, 10)
    }

    return {
      loading,
      searchResults,
      searchTerm,
      staticSearchTerm,
      cue,
      search
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100%;
  position: relative;
  animation-duration: 0.5s;
}
.search__form {
  width: min-content;
  color: white;
  background-color: rgb(65, 65, 65);
  border-radius: 100px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  padding-left: 30px;
  transition: all 0.3s;

  &__field {
    background: none;
    border: none;
    padding: 8px 0;
    font-family: inherit;
    color: inherit;
    font-size: 17px;
    width: 300px;
    transition: all 0.3s;

    &:focus-within {
      width: 400px;
    }

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: rgb(187, 187, 187);
      font-size: 15px;
    }
  }
}
.res__header {
  margin: 50px 0;
  margin-bottom: 20px;
  &__label {
    font-size: 18px;
  }
}

.search__results {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  .res {
    align-items: center;
    margin: 15px 10px;
    width: calc(100% / 2 - 20px);
    display: flex;
  }
}

.info {
  margin: 0 20px;
  font-size: 14px;
  overflow: hidden;
  padding-right: 5px;
  .title,
  .artist {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .title {
    display: block;
  }
  .artist {
    color: silver;
  }
}

.placeholder {
  flex-shrink: 0;
  transition: all 0.5s;
  width: 65px;
  height: 65px;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: linear-gradient(
    to bottom,
    rgba(#162229, 0.75),
    rgba(#db1d40, 0.75),
    rgba(#6f868c, 0.75),
    rgba(#7e2236, 0.75)
  );

  .cover {
    backface-visibility: hidden;
    height: 100%;
    width: 100%;
    border-radius: 3px;
    border: 2px solid rgb(194, 194, 194);
    transition: all 0.5s;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
}
</style>
