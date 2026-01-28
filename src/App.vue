<script setup lang="ts">
import Accueil from './components/Accueil.vue';
import Footter from './components/Footter.vue';
import router from './routes/router';

</script>
<template>
  <header class="main-header">
    <img alt="Vue logo" class="logo" src="./assets/logo_sans_texte.png"/>
    <h1 class="header-title">Les ateliers enchantés</h1>
    <router-link class="header-button" style="text-decoration: underline; text-decoration-thickness: 3px;" to="/">Accueil</router-link>
    <router-link class="header-button" to="/ateliers">Les ateliers</router-link>
    <router-link class="header-button" to="/cabinet">Le cabinet enchanté</router-link>
    <router-link class="header-button" to="/qui-suis-je">Qui suis-je ?</router-link>
  </header>

  <main>
    <router-view/>
  </main>
  <footer>
    <Footter/>
  </footer>
</template>