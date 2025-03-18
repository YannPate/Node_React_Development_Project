import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Correction de la propriété `styleUrls` au lieu de `styleUrl`
})
export class LoginComponent {
  // Vous pouvez ajouter une logique ici si nécessaire pour l'authentification
}
