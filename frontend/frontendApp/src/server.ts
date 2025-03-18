import { AngularNodeAppEngine, createNodeRequestHandler, isMainModule, writeResponseToNodeResponse } from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Répertoire du serveur et du navigateur
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

// Création de l'application Express
const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Exemple de points de terminaison de l'API Express. 
 * Décommentez et définissez des points de terminaison si nécessaire.
 * 
 * Exemple :
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Traiter la requête de l'API
 * });
 * ```
 */

/**
 * Servir les fichiers statiques depuis le dossier /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',  // Met en cache les fichiers pendant 1 an
    index: false,  // Désactive l'indexation des fichiers
    redirect: false, // Empêche les redirections automatiques
  })
);

/**
 * Gestion des requêtes restantes en rendant l'application Angular.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => {
      if (response) {
        writeResponseToNodeResponse(response, res);  // Rédige la réponse SSR
      } else {
        next();  // Passe à la suivante si la réponse est vide
      }
    })
    .catch(next);  // Gère les erreurs
});

/** */