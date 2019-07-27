<template>
  <div class="menu">
    <!-- Logo -->
    <div class="logo">
      <img class="logo__img" src="@/assets/img/logo.png" alt="Logo" />
      <h1 class="logo__label">TuneIn</h1>
    </div>
    <!-- Explore -->
    <nav class="nav">
      <h3 class="nav__label">Explore</h3>
      <ul class="nav__list">
        <router-link
          v-for="item in exploreItems"
          :key="item.name"
          tag="li"
          :to="item.to"
          class="nav__list__item"
        >
          <i :class="['icon', item.icon]"></i>
          <span class="nav__list__link">{{ item.name }}</span>
        </router-link>
      </ul>
    </nav>
    <!-- Services -->
    <nav class="nav services">
      <h3 class="nav__label">Services</h3>
      <ul class="nav__list">
        <router-link
          v-for="item in servicesItems"
          :key="item.name"
          tag="li"
          :to="item.to"
          class="nav__list__item"
        >
          <i :class="['icon', item.icon, { star: item.name == 'Premium' }]"></i>
          <span class="nav__list__link">{{ item.name }}</span>
        </router-link>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      exploreItems: [
        {
          name: "Discover",
          to: "/",
          icon: "bx bxs-album"
        },
        {
          name: "Search",
          to: "/search",
          icon: "bx bx-search"
        },
        {
          name: "Your Tunes",
          to: "/likes",
          icon: "bx bxs-heart"
        }
      ],
      servicesItems: [
        {
          name: "Get The App",
          to: "/app",
          icon: "bx bxs-circle"
        },
        {
          name: "Premium",
          to: "/premium",
          icon: "bx bxs-star"
        },
        {
          name: "Settings",
          to: "/settings",
          icon: "bx bxs-cog"
        }
      ]
    };
  }
};
</script>
