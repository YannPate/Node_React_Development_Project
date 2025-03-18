import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',  // Définition du sélecteur pour ce composant
  imports: [RouterOutlet],  // Importation de RouterOutlet pour la gestion des routes
  templateUrl: './app.component.html',  // Définition du fichier HTML du composant
  styleUrls: ['./app.component.css']  // Définition du fichier CSS du composant
})
export class AppComponent {
  // Le composant principal de l'application, aucune logique supplémentaire n'est nécessaire ici
}
