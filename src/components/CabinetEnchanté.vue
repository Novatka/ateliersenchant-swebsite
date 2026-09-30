<script setup lang="ts">
import { ref, onMounted } from 'vue';

onMounted(() => {
  document.title = 'Rejoindre le réseau';
});

const nom = ref('');
const prenom = ref('');
const email = ref('');
const ville = ref('');
const envoye = ref(false);
const erreur = ref(false);
const envoiEnCours = ref(false);

async function soumettreFormulaire() {
  envoiEnCours.value = true;
  erreur.value = false;

  try {
    const reponse = await fetch('https://formspree.io/f/mqpajpkj', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        ville: ville.value,
      }),
    });

    if (reponse.ok) {
      envoye.value = true;
    } else {
      erreur.value = true;
    }
  } catch {
    erreur.value = true;
  } finally {
    envoiEnCours.value = false;
  }
}
</script>

<template>
  <div class="reseau-container">
    <div class="reseau-partie-1">
      <div class="reseau-bandeau-1">
        <h1 class="reseau-titre">Rejoindre le réseau</h1>
        <p class="reseau-sou-titre">Envie de lancer vos propres Ateliers Enchantés ?</p>
        <p class="reseau-description">
          Vous souhaitez entreprendre dans le domaine de l'enfance tout en étant autonome ?
          Les Ateliers Enchantés proposent un modèle clé en main pour vous former, créer et
          développer votre activité sereinement.
        </p>
      </div>
    </div>

    <div class="reseau-partie-2">
      <div class="reseau-bandeau-2">
        <h2 class="reseau-form-titre">Formulaire de contact</h2>

        <form v-if="!envoye" class="reseau-form" @submit.prevent="soumettreFormulaire">
          <div class="form-groupe">
            <label for="nom">Nom</label>
            <input type="text" id="nom" v-model="nom" required />
          </div>

          <div class="form-groupe">
            <label for="prenom">Prénom</label>
            <input type="text" id="prenom" v-model="prenom" required />
          </div>

          <div class="form-groupe">
            <label for="email">E-mail</label>
            <input type="email" id="email" v-model="email" required />
          </div>

          <div class="form-groupe">
            <label for="ville">Ville / Département</label>
            <input type="text" id="ville" v-model="ville" required />
          </div>

          <p v-if="erreur" class="reseau-erreur">
            Une erreur est survenue. Veuillez réessayer.
          </p>

          <button type="submit" class="reseau-btn" :disabled="envoiEnCours">
            {{ envoiEnCours ? 'Envoi en cours...' : 'Je souhaite en savoir plus' }}
          </button>
        </form>

        <div v-else class="reseau-confirmation">
          <div class="reseau-confirmation-icon">✓</div>
          <p class="reseau-confirmation-titre">Merci {{ prenom }} !</p>
          <p>Votre demande a bien été envoyée.</p>
          <p>Nous reviendrons vers vous très rapidement.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("../css/cabinetenchante.css");
</style>
