import { Component, inject } from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
import { Courses } from '../../../models/Courses.dto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-creation-deadline',
  imports: [FormsModule],
  templateUrl: './creation-deadline.component.html',
  styleUrl: './creation-deadline.component.css'
})
export class CreationDeadlineComponent {
  private readonly apiService: ApiServiceService = inject(ApiServiceService);
    
  course: Courses = {
    id: -1,
    course: '',
    module: '',
    tdSubmission: '',
    nextExam: '',
    project: '',
  };

  // Calling the post method with the filled course
  createCourse() {
    console.log("Submitting course:", this.course); // Ajout d'un log avant l'envoi

    this.apiService.createCourse(this.courseDateFormat(this.course)).subscribe({
      next: () => console.log("Course successfully created."),
      error: error => console.error("Error while creating course:", error) // console.error pour les erreurs
    });
  }

  courseDateFormat(course: Courses): Courses {
    let updatedCourse: Courses = {
      ...course,
      course: course.course.trim(), // trim pour éviter les espaces inutiles
      module: course.module.trim()
    };

    // Liste des champs de date à convertir
    const dateFields: (keyof Courses)[] = ['tdSubmission', 'nextExam', 'project'];

    dateFields.forEach(field => {
      if (updatedCourse[field]) {
        updatedCourse[field] = new Date(updatedCourse[field] as string).toISOString();
      } else {
        updatedCourse[field] = null;
      }
    });

    return updatedCourse;
  }
}
