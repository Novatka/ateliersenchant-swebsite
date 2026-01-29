<template>
    <div class="accueil-partie-1">
        <div class="accueil-bandeau-1">
            <h1 class="accueil-overlay-txt-1">S'épanouir en s'amusant !</h1>
            <h2 class="accueil-overlay-txt-2">Accueil de loisirs de 3 à 10 ans</h2>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGzOKsWBSIH957bO6rnVlLq0VSo4ES-aZtlNORcKlxt3gl0w/viewform?fbclid=IwY2xjawPnehJleHRuA2FlbQIxMABzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeuptMGi1YUF4HtzNclGI_F9K-z4e3V_m4hTQ0Q0DFACryYRsxS0XcDalVpDY_aem_uvDwoUJNJH_eSZNnMUuSHg" target="_blank" class="accueil-overlay-btn-1">S'inscrire au prochain stage</a>
        </div>
    </div> 
   <div class="accueil-partie-2">
        <div class="accueil-bandeau-2">
            <h1 class="accueil-overlay-txt-3">Actualités des ateliers</h1>
            <h2 class="accueil-overlay-txt-4">Suivez nos dernières activités en direct</h2>
            <div class="photos-div">
                <img class="accueil-sticker-1" src="../assets/nounours.png" alt="Mignon petit nounours souriant tenant un ballon rouge">
                <div class="img-container-facebook">
                    <div 
                        class="fb-page" 
                        data-href="https://www.facebook.com/profile.php?id=61572421952002" 
                        data-tabs="timeline" 
                        data-width="500" 
                        data-height="600" 
                        data-small-header="false" 
                        data-adapt-container-width="true" 
                        data-hide-cover="false" 
                        data-show-facepile="true">
                    </div>
                </div>
                <img class="accueil-sticker-2" src="../assets/fleur.png" alt="Fleur toute souriante">
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    // Chargement du script Facebook
    if (window.FB) {
        window.FB.XFBML.parse();
    } else {
        const script = document.createElement('script');
        script.src = "https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v18.0";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
    }
});
</script>
<style>
@import url("../css/accueil.css");
</style>
