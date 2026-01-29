<template>
  <div class="facebook-container">
    <div 
      class="fb-page" 
      :data-href="pageUrl" 
      data-tabs="timeline" 
      data-width="500" 
      data-height="700" 
      data-small-header="false" 
      data-adapt-container-width="true" 
      data-hide-cover="false" 
      data-show-facepile="true"
    >
      <blockquote :cite="pageUrl" class="fb-xfbml-parse-ignore">
        <a :href="pageUrl">Chargement...</a>
      </blockquote>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  pageUrl: {
    type: String,
    default: 'https://www.facebook.com/profile.php?id=61572421952002' // Remplace par la tienne
  }
});

onMounted(() => {
  // 1. On vérifie si le SDK est déjà chargé
  if (window.FB) {
    // Si oui, on demande à Facebook de scanner le nouveau contenu HTML
    window.FB.XFBML.parse();
  } else {
    // 2. Sinon, on charge le SDK dynamiquement
    const script = document.createElement('script');
    script.src = "https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v18.0";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }
});
</script>

<style scoped>
.facebook-container {
  display: flex;
  justify-content: center;
  padding: 20px;
  background: #f0f2f5;
  border-radius: 8px;
}
</style>