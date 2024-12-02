<template>
  <div>
    <h1>Suivi de l'humeur</h1>
    <p>Bienvenue, répondez au questionnaire d'humeur chaque jour pour suivre votre état !</p>
    <MoodQuestionnaire />
fdsaf
    <!-- Bouton d'installation PWA pour Android -->
    <button
      v-if="showInstallButton"
      @click="installPWA"
      class="install-button"
    >
      Installer l'application
    </button>
dsa
    <!-- Message d'installation pour iOS -->
    <div v-if="isIos && !isInstalled" class="install-ios">
      <p>Pour installer cette application, appuyez sur le bouton de partage dans Safari et sélectionnez "Ajouter à l'écran d'accueil".</p>
    </div>
    okiii
  </div>
</template>

<script>
import MoodQuestionnaire from './MoodQuestionnaire.vue';
import { database } from '../firebase';
import { ref, set } from "firebase/database";

export default {
  components: { MoodQuestionnaire },
  data() {
    return {
      deferredPrompt: null,
      showInstallButton: false,
      isInstalled: false,
      isIos: false,
    };
  },
  mounted() {
    // Détecter si l'utilisateur est sur iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    this.isIos = /iphone|ipad|ipod/.test(userAgent);

    // Écouter l'événement beforeinstallprompt
    window.addEventListener('beforeinstallprompt', (e) => {
      // Empêcher l'affichage automatique de la boîte de dialogue
      e.preventDefault();
      // Sauvegarder l'événement pour l'utiliser plus tard
      this.deferredPrompt = e;
      // Afficher le bouton d'installation uniquement si ce n'est pas iOS
      if (!this.isIos) {
        this.showInstallButton = true;
      }
    });

    // Écouter l'événement d'installation de l'application
    window.addEventListener('appinstalled', () => {
      // Masquer le bouton d'installation après l'installation
      this.showInstallButton = false;
      // Réinitialiser l'événement
      this.deferredPrompt = null;
      this.isInstalled = true;
      console.log('Application installée avec succès');
    });
  },
  methods: {
    saveResponse(response) {
      const userId = "exampleUserId"; // Remplacez par l'authentification
      const date = new Date().toISOString().split('T')[0];
      const responseRef = ref(database, `users/${userId}/responses/${date}`);
      set(responseRef, response)
        .then(() => alert('Réponse enregistrée avec succès !'))
        .catch((err) => alert('Erreur : ' + err.message));
    },
    installPWA() {
      if (this.deferredPrompt) {
        // Afficher la boîte de dialogue d'installation
        this.deferredPrompt.prompt();
        // Attendre que l'utilisateur réponde à la boîte de dialogue
        this.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('Utilisateur a accepté l\'installation de la PWA');
          } else {
            console.log('Utilisateur a refusé l\'installation de la PWA');
          }
          // Réinitialiser l'événement
          this.deferredPrompt = null;
          // Masquer le bouton d'installation
          this.showInstallButton = false;
        });
      }
    },
  },
};
</script>

<style scoped>
/* Styles spécifiques au composant parent */

/* Styles pour le bouton d'installation */
.install-button {
  display: block;
  width: 100%;
  max-width: 350px;
  margin: 20px auto;
  padding: 15px 0;
  background-color: #10b981; /* Vert pour différencier */
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.install-button:hover {
  background-color: #059669;
  transform: translateY(-2px);
}

/* Styles pour le message d'installation sur iOS */
.install-ios {
  text-align: center;
  margin: 20px;
  padding: 15px;
  background-color: #f3f4f6;
  border-radius: 8px;
  font-size: 1em;
  color: #111827;
}
</style>
