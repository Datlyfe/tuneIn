<template>
  <div class="menu">
    <!-- Logo -->
    <div class="logo">
      <img class="logo__img" src="@/assets/img/logo.png" alt="Logo">
      <h1 class="logo__label">TuneIn</h1>
    </div>
    <!-- Explore -->
    <nav class="nav"> 
      <h3 class="nav__label">Explore music</h3>
      <ul class="nav__list">
        <router-link tag="li" to="/" class="nav__list__item active-bar">
          <i class="fa fa-binoculars" ></i>          
          <span  class="nav__list__link">Discover</span>          
        </router-link>
         <router-link tag="li" to="/search" class="nav__list__item">
          <i class="fa fa-search" ></i>          
          <span class="nav__list__link">Search</span>          
        </router-link>
         <router-link tag="li" to="/likes" class="nav__list__item active-bar">
          <i class="fa fa-heart" ></i>          
          <span  class="nav__list__link">Your Tunes</span>          
        </router-link>
      </ul>
    </nav>
    <!-- Services -->
     <nav class="nav services"> 
      <h3 class="nav__label">Services</h3>
      <ul class="nav__list">
         <router-link tag="li" to="/app" class="nav__list__item active-bar">
          <i class="fa fa-circle" ></i>          
          <span  class="nav__list__link">Get The App</span>          
        </router-link>
       <router-link tag="li" to="/premium" class="nav__list__item active-bar">
          <i class="fa fa-star premium" ></i>          
          <span  class="nav__list__link">Premium</span>          
        </router-link>
         <router-link tag="li" to="/settings" class="nav__list__item active-bar">
          <i class="fa fa-gear" ></i>          
          <span  class="nav__list__link">Settings</span>          
        </router-link>
       
      </ul>
    </nav>
    <!-- Watermark -->
    <div class="watermark">
      <!-- <img src="@/assets/img/sig.png" alt=""> -->
      <a href="https://github.com/MoezBouaggad/TuneIn" target="_blank" class="watermark__label">Github<i class="fa fa-github watermark__icon"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

