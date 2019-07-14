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
          <box-icon
            style="height:unset"
            size="18px"
            :color="item.icon.color || '#f0e6e8'"
            :name="item.icon.name"
            :type="item.icon.type"
          ></box-icon>
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
          <box-icon
            size="18px"
            :color="item.icon.color || '#f0e6e8'"
            :name="item.icon.name"
            :type="item.icon.type"
          ></box-icon>
          <span class="nav__list__link">{{ item.name }}</span>
        </router-link>
      </ul>
    </nav>
    <!-- Watermark -->
    <div class="watermark">
      <!-- <img src="@/assets/img/sig.png" alt=""> -->
      <a href="https://github.com/MoezBouaggad/TuneIn" target="_blank" class="watermark__label">
        Github
        <i class="fa fa-github watermark__icon"></i>
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
          icon: { name: "album", type: "solid" }
        },
        {
          name: "Search",
          to: "/search",
          icon: { name: "search-alt-2", type: "solid" }
        },
        {
          name: "Your Tunes",
          to: "/likes",
          icon: { name: "heart", type: "solid" }
        }
      ],
      servicesItems: [
        {
          name: "Get The App",
          to: "/app",
          icon: { name: "circle", type: "solid" }
        },
        {
          name: "Premium",
          to: "/premium",
          icon: { name: "star", type: "solid", color: "orange" }
        },
        {
          name: "Settings",
          to: "/settings",
          icon: { name: "cog", type: "solid" }
        }
      ]
    };
  }
};
</script>
