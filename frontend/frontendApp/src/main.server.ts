import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

/**
 * Fonction de démarrage pour l'application côté serveur
 * Utilise Angular Universal pour rendre l'application côté serveur.
 */
const initializeApp = () => {
  // Lancement de l'application avec la configuration du serveur
  bootstrapApplication(AppComponent, config);
};

// Exportation de la fonction de démarrage par défaut
export default initializeApp;
