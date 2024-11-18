<template>
  <aside class="menu">
    <div v-if="mq.lgMinus">
      <ul class="mobile-list">
        <li
          @click="changeView(item.view)"
          v-for="item in [...exploreItems, ...servicesItems]"
          :key="item.name"
          class="mobile-list-item"
        >
          <svg-icon class="icon" :name="item.icon"></svg-icon>
        </li>
      </ul>
      <div style="flex:auto"></div>
      <div class="mobile-watermark">
        <a
          rel="noreferrer"
          href="https://github.com/Datlyfe/tuneIn"
          target="_blank"
        >
          <svg-icon name="github" class="icon" />
        </a>
      </div>
    </div>

    <div v-if="mq.xlPlus">
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
            <svg-icon class="icon" :name="item.icon"></svg-icon>
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
            <svg-icon :class="['icon', item.icon]" :name="item.icon"></svg-icon>
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
          <svg-icon name="github" class="icon" />
        </a>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
// @ts-expect-error
import { useMq } from "vue3-mq";

import { ref } from "vue";
const store = useStore();

const mq = useMq();
console.log(mq);
const exploreItems = ref([
  {
    name: "Discover",
    view: "discover",
    icon: "album",
  },
  {
    name: "Search",
    view: "search",
    icon: "search",
  },
  {
    name: "Your Tunes",
    view: "likes",
    icon: "heart",
  },
]);

const servicesItems = ref([
  {
    name: "Get The App",
    view: "page404",
    icon: "circle",
  },
  {
    name: "Premium",
    view: "page404",
    icon: "star",
  },
  {
    name: "Settings",
    view: "page404",
    icon: "cog",
  },
]);

const changeView = (view: string) => {
  store.setCurrentView(view);
};
</script>

<style lang="scss" scoped>
.mobile-logo {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 40px;
  }
}

.mobile-watermark {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    width: 24px;
    height: 24px;
    color: white;
    fill: currentColor;
  }
}

.mobile-list {
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
}
.mobile-list-item {
  cursor: pointer;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    width: 24px;
    height: 24px;
    color: white;
    fill: currentColor;
  }
}

.active-menu-mobile {
  .icon {
    color: #db1d40;
    fill: currentColor;
  }
}

.logo {
  display: flex;
  align-items: center;
  &__label {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 25px;
    letter-spacing: 2px;
  }

  &__img {
    height: 40px;
    margin-right: 15px;
  }
}

.nav {
  margin: 50px 0;

  &__label {
    margin: 10px 0;
    font-size: 20px;
    text-transform: uppercase;
  }

  &__list {
    &__item {
      padding-left: 13px;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      font-size: 15px;
      font-weight: 600;
      margin: 20px 0;
      color: #f0e6e8;
      cursor: pointer;
      &:hover {
        color: white;
      }

      .icon {
        width: 17px;
        height: 17px;
        color: inherit;
        fill: currentColor;
      }
      .star {
        color: orange;
      }
    }

    &__link {
      text-decoration: none;
      color: inherit;
      margin-left: 10px;
    }
  }
}

.active-menu {
  padding-left: 9px;
  color: white;
  border-left: 4px solid #db1d40;
}

.watermark {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  img {
    margin: 0 10px;
    height: 50px;
  }
  &__label {
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dddddd;
  }

  .icon {
    color: inherit;
    fill: currentColor;
    width: 18px;
    height: 18px;
    margin-left: 10px;
  }
}

@media only screen and (max-width: 800px) {
  .mobile-list {
    flex-direction: row;
    justify-content: center;
  }
  .mobile-watermark {
    display: none;
  }
}
</style>
