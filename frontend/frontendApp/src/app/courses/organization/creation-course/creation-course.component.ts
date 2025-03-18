import { Component, inject } from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
import { Courses } from '../../../models/Courses.dto';
import { FormsModule } from '@angular/forms';  // Pour `ngModel`
import { JsonPipe } from '@angular/common';   // Non utilisé dans le code, peut être supprimé

@Component({
  selector: 'app-creation-course',
  imports: [FormsModule], // Inclusion de FormsModule pour ngModel
  templateUrl: './creation-course.component.html',
  styleUrl: './creation-course.component.css'
})
export class CreationCourseComponent {
  private readonly apiService: ApiServiceService = inject(ApiServiceService);

  course: Courses = {
    id: -1,
    course: '',
    module: '',
    tdSubmission: null,  // Peut être de type `Date | null`
    nextExam: null,      // Peut être de type `Date | null`
    project: null,       // Peut être de type `Date | null`
  };

  // Méthode pour créer un cours via l'API
  createCourse() {
    if (this.course.course && this.course.module) {  // Vérification de la validité du formulaire
      this.apiService.createCourse(this.course).subscribe({
        next: () => {
          console.log("Course created successfully!");
          // Vous pouvez ajouter ici une notification de succès à l'utilisateur
        },
        error: (error) => {
          console.error("Error creating course:", error);
          // Vous pouvez ajouter ici un message d'erreur à l'utilisateur
        }
      });
    } else {
      console.log("Please fill in both course and module fields.");
      // Afficher un message d'erreur pour l'utilisateur
    }
  }

  // Vérifie si le formulaire est valide pour activer ou désactiver le bouton
  isFormValid(): boolean {
    return this.course.course.trim() !== '' && this.course.module.trim() !== '';  // Vérification des champs obligatoires
  }
}
