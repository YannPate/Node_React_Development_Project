import { Component, inject } from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
import { Courses } from '../../../models/Courses.dto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-creation-deadline',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './creation-deadline.component.html',
  styleUrl: './creation-deadline.component.css'
})
export class CreationDeadlineComponent {
  private readonly apiService: ApiServiceService = inject(ApiServiceService);
    
  course: Courses = {
    id: -1,
    courseName: '',
    moduleName: '',
    tdSubmissionDate: null,
    nextExamDate: null,
    projectDate: null,
  };

  createCourse() {
    this.apiService.createCourse(this.courseDateFormat(this.course)).subscribe({
      next: () => console.log("Course successfully created."),
      error: (error: any) => console.error("Error while creating course:", error)
    });
  }

  courseDateFormat(course: Courses): Courses {
    return {
      ...course,
      tdSubmissionDate: course.tdSubmissionDate ? new Date(course.tdSubmissionDate as any).toISOString() : null,
      nextExamDate: course.nextExamDate ? new Date(course.nextExamDate as any).toISOString() : null,
      projectDate: course.projectDate ? new Date(course.projectDate as any).toISOString() : null
    };
  }
}
