<template>
  <div>
    <div v-show="loading" class="signal"></div>
    <div :hidden="loading" class="feed fadeIn">
      <ul class="feed">
        <li class="item" v-for="song in feed" :key="song.id">
          <div class="cover-placeholder">
            <div
              @click="cue(song)"
              class="cover"
              :style="{
                backgroundImage: `url(${song.album.cover_small})`
              }"
            ></div>
          </div>
          <div class="info">
            <span class="title">{{ song.title }}</span>
            <span class="artist">{{ song.artist.name }}</span>
          </div>
          <div class="rank">
            <svg-icon
              @click="likeSong(song)"
              :class="[{ liked: isLiked(likes, song.id) }, 'fav']"
              name="heart"
            ></svg-icon>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Ebus } from '../Ebus.js'
import { ref, computed, watch, onBeforeMount } from '@vue/composition-api'
import apiService from '@/services/api'

export default {
  props: {
    genreId: {
      type: String,
      required: true
    }
  },
  setup(props, { root }) {
    const feed = ref([])
    const loading = ref(true)

    const likes = computed(() => {
      return root.$store.state.likes
    })

    const isLiked = (likes, id) => {
      let song = likes.filter(song => song.id === id)
      if (song.length === 1) return true
      return false
    }

    const likeSong = song => {
      if (isLiked(likes.value, song.id)) {
        root.$store.commit('unlike', song)
      } else {
        root.$store.commit('likeSong', song)
      }
    }

    const cue = song => {
      Ebus.$emit('newCue', song, true)
    }

    watch(
      () => props.genreId,
      (to, from) => {
        loading.value = true
        feed.value = null
        if (to == from) return

        apiService.playlist(to).then(data => {
          feed.value = data
          setTimeout(() => {
            loading.value = false
          }, 10)
        })
      }
    )

    onBeforeMount(async () => {
      loading.value = true
      feed.value = await apiService.playlist(props.genreId)
      loading.value = false
    })

    return {
      feed,
      loading,
      isLiked,
      likes,
      likeSong,
      cue
    }
  }
}
</script>

<style lang="scss" scoped>
.feed {
  list-style: none;
}
.item {
  display: flex;
  align-items: center;
  margin: 25px 0;
}
.info {
  margin: 0 20px;
  font-size: 16px;
  overflow: hidden;
  padding-right: 10px;
  .title,
  .artist {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
.title {
  color: white;
  display: block;
}
.artist {
  color: silver;
}

.cover {
  backface-visibility: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  border: 2px solid rgb(194, 194, 194);
  border-radius: 50%;
  height: 100%;
  width: 100%;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
  }
}

.cover-placeholder {
  flex-shrink: 0;
  transition: all 0.5s;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: linear-gradient(
    to bottom,
    rgba(#162229, 0.75),
    rgba(#db1d40, 0.75),
    rgba(#6f868c, 0.75),
    rgba(#7e2236, 0.75)
  );
}

.rank {
  margin-left: auto;
  margin-right: 30px;
}
.fav {
  color: rgb(170, 170, 170);
  fill: currentColor;
  width: 20px !important;
  height: 20px !important;

  &:hover {
    cursor: pointer;
    color: #db1d40;
  }
}
.liked {
  fill: currentColor;
  color: #db1d40 !important;
}
</style>
