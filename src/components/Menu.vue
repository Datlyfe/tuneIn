<template>
  <div class="menu">
    <template v-if="$mq === 'sm' || $mq === 'md'">
      <div class="mobile-watermark">
        <a
          rel="noreferrer"
          href="https://github.com/Datlyfe/tuneIn"
          target="_blank"
        >
          <i class="bx bxl-github icon"></i>
        </a>
      </div>
      <ul class="mobile-list">
        <li
          @click="changeView(item.view)"
          v-for="item in [...exploreItems, ...servicesItems]"
          :key="item.name"
          class="mobile-list-item"
        >
          <i :class="['icon', item.icon]"></i>
        </li>
      </ul>
    </template>

    <template v-if="$mq === 'lg'">
      <!-- Logo -->

      <div class="logo">
        <img class="logo__img" src="@/assets/img/logo.png" alt="Logo" />
        <h1 class="logo__label">TuneIn</h1>
      </div>
      <!-- Explore -->
      <nav class="nav">
        <h3 class="nav__label">Explore</h3>
        <ul class="nav__list">
          <li
            @click="changeView(item.view)"
            v-for="item in exploreItems"
            :key="item.name"
            class="nav__list__item"
          >
            <i :class="['icon', item.icon]"></i>
            <span class="nav__list__link">{{ item.name }}</span>
          </li>
        </ul>
      </nav>
      <!-- Services -->
      <nav class="nav services">
        <h3 class="nav__label">Services</h3>
        <ul class="nav__list">
          <li
            @click="changeView(item.view)"
            v-for="item in servicesItems"
            :key="item.name"
            class="nav__list__item"
          >
            <i
              :class="['icon', item.icon, { star: item.name == 'Premium' }]"
            ></i>
            <span class="nav__list__link">{{ item.name }}</span>
          </li>
        </ul>
      </nav>
      <!-- Watermark -->
      <div class="watermark">
        <a
          rel="noreferrer"
          href="https://github.com/Datlyfe/tuneIn"
          target="_blank"
          class="watermark__label"
        >
          Github
          <i class="bx bxl-github icon"></i>
        </a>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exploreItems: [
        {
          name: 'Discover',
          view: 'discover',
          icon: 'bx bxs-album'
        },
        {
          name: 'Search',
          view: 'search',
          icon: 'bx bx-search'
        },
        {
          name: 'Your Tunes',
          view: 'likes',
          icon: 'bx bxs-heart'
        }
      ],
      servicesItems: [
        {
          name: 'Get The App',
          view: 'page404',
          icon: 'bx bxs-circle'
        },
        {
          name: 'Premium',
          view: 'page404',
          icon: 'bx bxs-star'
        },
        {
          name: 'Settings',
          view: 'page404',
          icon: 'bx bxs-cog'
        }
      ]
    }
  },
  methods: {
    changeView(view) {
      this.$store.commit('setCurrentView', view)
    }
  }
}
</script>
