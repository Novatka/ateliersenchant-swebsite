<script setup lang="ts">
import Footter from './components/Footter.vue';
import router from './routes/router';

</script>
<template>
  <header class="main-header">
    <img alt="Vue logo" class="logo" src="./assets/logo_sans_texte.png"/>
    <h1 class="header-title">Les ateliers enchantés</h1>
    <router-link class="header-button" to="/">Accueil</router-link>
    <router-link class="header-button" to="/ateliers">Les ateliers</router-link>
    <router-link class="header-button" to="/cabinetenchanté">Le cabinet enchanté</router-link>
    <router-link class="header-button" to="/qui-suis-je">Qui suis-je ?</router-link>
  </header>

  <main>
    <router-view/>
  </main>

  <footer>
    <Footter/>
  </footer>
</template>