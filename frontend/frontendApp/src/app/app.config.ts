import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Importation des routes définies pour l'application
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';  // Hydratation côté client et gestion des événements
import { provideHttpClient, withFetch } from '@angular/common/http';  // Fournisseurs pour HttpClient et les requêtes HTTP via fetch

// Définition de la configuration de l'application
export const appConfig: ApplicationConfig = {
  providers: [
    // Fournisseur pour la détection des changements de zone avec coalescence des événements
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Fournisseur pour la gestion des routes de l'application
    provideRouter(routes),

    // Fournisseur pour l'hydratation du côté client avec la replay des événements
    provideClientHydration(withEventReplay()),

    // Fournisseur pour la gestion des requêtes HTTP avec fetch
    provideHttpClient(withFetch())
  ]
};
