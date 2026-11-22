<template>
  <section class="atelier-container">
    <div class="atelier-partie-1">
      <div class="atelier-bandeau-1">
        <div class="ateliers-title-1">
            <h1>Les ateliers</h1>
            <h2>S'épanouir en s'amusant</h2>
            <h3>Activités Montessori en autonomie et deux ateliers quotidiens : Théâtre, cuisine, bricolage, yoga et expression corporelle.</h3>
        </div>
      </div>
        <div class="atelier-info-cards">
        <div class="atelier-info-card">
          <div class="detail-card">
            <h3>PUBLIC</h3>
            <p>3 À 9 ANS</p>
            <p>MAX 6 ENFANTS</p>
          </div>
        </div>
        <div class="atelier-info-card">
           <div class="program-text">
                <span class="divider"></span>
                <h2>RENSEIGNEMENTS ET INSCRIPTIONS</h2>
              <p><i class="icon">📞</i> 06 31 94 49 30</p>
                    <p>lesateliersenchantes31@gmail.com</p>
                    <p>28 avenue Jean Moulis<br>31590 Verfeil</p>
              <div class="plus-value">
              </div>
            </div>
        </div>
         <div class="atelier-info-card">
          <h2>LE PRIX</h2>
          <div class="price-box">
          <span class="price-label">SEMAINE </span>
        <span class="price-value">200€</span>
      </div>
      <div class="price-box">
        <span class="price-label">JOURNÉE </span>
        <span class="price-value">50€</span>
      </div>
      <div class="price-box highlight">
        <span class="price-label">DEMI-JOURNÉE </span>
        <span class="price-value">30€</span>
      </div>
         </div>
         </div>
    </div>
   <div class="accueil-partie-2">
        <div class="accueil-bandeau-2">
            <h1 class="accueil-overlay-txt-3">Actualités des Ateliers</h1>
            <h2 class="accueil-overlay-txt-4">Suivez nos dernières activités en direct</h2>
            <div class="photos-div">
               
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
            </div>
        </div>
    </div>
    </section>
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
@import url("../css/atelier.css");
</style>
