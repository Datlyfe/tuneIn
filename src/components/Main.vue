<template>
  <div class="main">
    <component :is="store.currentView" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import Discover from "./Discover.vue";
import Search from "./Search.vue";
import Likes from "./Likes.vue";
import Page404 from "./Page404.vue";
export default defineComponent({
  name: "Main",
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
  components: {
    Discover,
    Search,
    Likes,
    Page404,
  },
});
</script>
