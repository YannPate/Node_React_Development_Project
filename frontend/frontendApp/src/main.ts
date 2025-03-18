import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/**
 * Démarre l'application Angular en utilisant la configuration fournie.
 * Attrape et affiche toute erreur qui pourrait survenir lors du démarrage.
 */
const startApp = () => {
  bootstrapApplication(AppComponent, appConfig)
    .catch((error) => {
      // Affiche une erreur dans la console en cas d'échec du démarrage
      console.error("Une erreur s'est produite lors du démarrage de l'application : ", error);
    });
};

// Lancer l'application
startApp();
