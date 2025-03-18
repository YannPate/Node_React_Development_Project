import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { appConfig } from './app.config';  // Importation de la configuration de l'application
import { serverRoutes } from './app.routes.server';  // Importation des routes pour le rendu côté serveur

// Définition de la configuration spécifique au serveur
const serverSpecificConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),  // Fournisseur pour le rendu côté serveur
    provideServerRoutesConfig(serverRoutes)  // Fournisseur pour la configuration des routes côté serveur
  ]
};

// Fusion des configurations spécifiques à l'application et du serveur
export const config = mergeApplicationConfig(appConfig, serverSpecificConfig);
