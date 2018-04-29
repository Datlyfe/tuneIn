<template>
  <div class="search animated slideInDown">
    <form @submit="search" class="search__form">
      <input v-model="term" type="text" class="search__form__field" placeholder="Search">
    </form>
    <div v-if="loading" class="signal"></div>
    <div :hidden="loading" class="animated fadeIn">
      <div v-if="searchResults"  class="res__header">
      <h3 class="res__header__label">Search results for "{{searchTerm}}"</h3>
    </div>
    <div v-if="searchResults" class="search__results">
      <div  v-for="res in searchResults" :key="res.id" class="res">
        <div class="placeholder">
          <div @click="cue(res)" class="image" :style="getBgImg(res.album.cover_small)">
        </div>
        </div>
        
        <div class="res__info">
          <span class="title">{{shorten(res.title,12)}}</span>
          <span class="artist">{{shorten(res.artist.name,12)}}</span>
        </div>
        
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import { shorten } from "../helpers";
import { Ebus } from '../Ebus.js';

export default {
  name:'search',
  resource:'Search',
  data(){
    return{
      term:'',
      loading:false,
      searchResults:null,
      searchTerm:null
    }
  },
  methods:{
    shorten,
    getBgImg(src){
      return { backgroundImage: `url(${src})` }
    },
    cue(song){
      Ebus.$emit('newCue', song,false);
    },
    async search(e){
      this.loading=true;
      e.preventDefault();
      this.searchResults=null;
      this.searchTerm=this.term;
      this.searchResults = await this.$getResource('search',this.term);
      
      setTimeout(()=>{
        this.loading=false;
      },300)
      
      
    }
  }
  
}
</script>

