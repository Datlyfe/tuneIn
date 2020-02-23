<template>
  <div class="cue">
    <div v-if="song" class="cue-wrap fadeIn">
      <h3 class="label">Now playing</h3>
      <img
        :class="['cover', { spin: isPlaying }]"
        :src="song.album.cover_medium"
        alt
      />
      <span class="title">{{ song.title }}</span>
      <span class="artist">{{ song.artist.name }}</span>
      <div class="player">
        <div class="controlls">
          <div v-if="!hasLoaded" class="loader-wrap">
            <div class="loader">Loading...</div>
          </div>
          <template v-else>
            <svg-icon
              v-if="!isPlaying"
              @click="play"
              name="play"
              class="icon"
            />
            <svg-icon v-else @click="pause" name="pause" class="icon" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from '@vue/composition-api'
import { useHasAudioLoaded } from '@/hooks'
import { Ebus } from '../Ebus.js'
export default {
  setup() {
    const song = ref(null)
    const isPlaying = ref(false)
    const audio = new Audio()
    const audioSrc = ref(null)

    const hasLoaded = useHasAudioLoaded({
      srcRef: audioSrc,
      onLoad: () => {
        audio.play()
      }
    })

    const play = () => audio.play()
    const pause = () => audio.pause()
    const setIsPlaying = state => (isPlaying.value = state)

    audio.addEventListener('ended', () => setIsPlaying(false))
    audio.addEventListener('playing', () => setIsPlaying(true))
    audio.addEventListener('pause', () => setIsPlaying(false))
    audio.addEventListener('emptied', () => setIsPlaying(false))

    onMounted(() => {
      Ebus.$on('newCue', newSong => {
        if (song.value && newSong.id === song.value.id) return
        song.value = newSong
        audioSrc.value = song.value.preview
        audio.setAttribute('src', song.value.preview)
      })
    })

    onUnmounted(() => {
      audio.removeAttribute('src')
      audio.remove()
    })

    return {
      song,
      isPlaying,
      play,
      pause,
      hasLoaded
    }
  }
}
</script>

<style lang="scss" scoped>
.cue-wrap {
  animation-duration: 0.7s;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 17px;
}

.cover {
  width: 200px;
  height: 200px;
  padding: 3px;
  border-radius: 50%;
  background: #d8d6d6;
}

.title,
.artist {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.title {
  margin-top: 15px;
  color: white;
  display: block;
}
.artist {
  color: #d8d6d6;
}
.label {
  font-size: 15px;
  margin-bottom: 15px;
  color: #e4e4e4;
}

.player {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 25px auto;
  .controlls {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
  }
}
.icon {
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: white;
  fill: currentColor;
}

.loader-wrap {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-width: 2px;
  border-color: currentcolor currentcolor transparent transparent;
  border-style: solid;
  border-radius: 9999px;
  animation: 0.45s linear 0s infinite normal none running loader;

  .loader {
    clip: rect(0px, 0px, 0px, 0px);
    height: 1px;
    width: 1px;
    white-space: nowrap;
    position: absolute;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: -1px;
    padding: 0px;
    overflow: hidden;
  }
}

@media only screen and (max-width: 800px) {
  .label {
    display: none;
  }
  .cue-wrap {
    flex-direction: row;
    margin: 0;
  }
  .cover {
    width: 80px;
    height: 80px;
    padding: 0;
    border-radius: 0;
    transform: rotate(0deg) !important;
    animation: unset !important;
  }
  .title {
    margin-top: 0;
    margin: 0 20px;
  }
  .title,
  .artist {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .player {
    width: auto;
    margin: 0;
    margin-left: auto;
    margin-right: 20px;
  }
}
</style>
