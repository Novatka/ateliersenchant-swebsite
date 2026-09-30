import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../components/Accueil.vue';
import LesAteliers from '../components/Atelier.vue';
import CabinetEnchanté from '@/components/CabinetEnchanté.vue';
import Quisuisje from '@/components/Quisuisje.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Accueil },
    { path: '/ateliers', component: LesAteliers },
    { path: '/nousrejoindre', component: CabinetEnchanté },
    { path: '/qui-suis-je', component: Quisuisje },
    { path: '/*', redirect: '/' }

  ]
});

export default router;