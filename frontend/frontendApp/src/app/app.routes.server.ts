import { RenderMode, ServerRoute } from '@angular/ssr';  // Importation des classes nécessaires pour le rendu côté serveur

// Définition des routes du serveur
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',  // Cette route correspond à toutes les requêtes qui ne matchent aucune route définie
    renderMode: RenderMode.Prerender  // Le mode de rendu est défini sur Prerender, ce qui pré-génère le contenu côté serveur
  }
];
