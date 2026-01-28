<script setup lang="ts">
import Accueil from './components/Accueil.vue';
</script>

<template>
  <header class="main-header">
    <img alt="Vue logo" class="logo" src="./assets/logo_sans_texte.png"/>
    <h1 class="header-title">Les ateliers enchantés</h1>
    <button class="header-button" style="text-decoration: underline; text-decoration-thickness: 3px;" >Accueil</button>
    <button class="header-button">Le cabinet enchanté</button>
    <button class="header-button">Qui sommes nous ?</button>
    <button class="header-button">Contact</button>
  </header>

  <main>
    <Accueil/>
  </main>
</template>