<template>
  <div class="cue">
    <div
      v-if="song"
      :style="{ display: loading ? 'none' : 'flex' }"
      class="cue-song animated fadeIn"
    >
      <h3 class="playing-label">Now playing</h3>
      <img
        :class="{ spin: playing }"
        @error="loadingEnd"
        @load="loadingEnd"
        :src="song.album.cover_medium"
        alt
      />
      <span class="title">{{ shorten(song.title, 30) }}</span>
      <span class="artist">{{ song.artist.name }}</span>
      <div class="player">
        <i class="icon bx bx-play" @click="play" v-if="!playing"></i>
        <i class="icon bx bx-pause" @click="pause" v-if="playing"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { Ebus } from "../Ebus.js";
import { shorten } from "../helpers";
export default {
  name: "cue",
  data() {
    return {
      song: null,
      loading: true,
      playing: false,
      audio: null,
      prev: null,
      next: null
    };
  },
  methods: {
    shorten,
    play() {
      this.playing = true;
      this.audio.play();
    },
    pause() {
      this.audio.pause();
      this.playing = false;
    },
    goPrev() {
      if (this.prev) Ebus.$emit("newCue", this.prev, true);
    },
    loadingEnd() {
      this.loading = false;
    }
  },
  mounted() {
    Ebus.$on("newCue", (song, autoplay) => {
      if (song === this.song) return;
      this.loading = true;
      this.prev = this.song;
      if (this.audio) this.pause();
      this.song = song;
      this.audio = new Audio(this.song.preview);
      if (autoplay) this.play();

      if (this.prev) {
        if (this.prev.album.cover_medium == this.song.album.cover_medium) {
          setTimeout(() => {
            this.loading = false;
          }, 20);
        }
      }

      this.audio.addEventListener("ended", () => {
        this.playing = false;
      });
    });
  }
};
</script>
