import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router'; // Importation des modules de navigation
import { ApiServiceService } from '../api-service.service'; // Service pour la gestion des API

@Component({
  selector: 'app-courses',  // Définition du sélecteur pour l'utilisation du composant
  imports: [RouterOutlet, RouterLink],  // Déclaration des modules utilisés dans le composant
  templateUrl: './courses.component.html',  // Lien vers le template HTML
  styleUrls: ['./courses.component.css']  // Lien vers le fichier de styles CSS
})
export class CoursesComponent {
  // Le composant CoursesComponent est configuré sans logique interne pour l'instant
}
