import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from './models/Courses.dto';

@Injectable({
  providedIn: 'root'  // Ensures this service is available throughout the application
})
export class ApiService {

  private readonly http: HttpClient = inject(HttpClient); // Injecting HttpClient for API calls

  // Fetches the list of courses from the backend
  getCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>('/api/courses');
  }

  // Creates a new course by sending course data to the backend
  createCourse(course: Courses): Observable<any> {
    return this.http.post<Courses>('/api/course', course);
  }

  // Updates an existing course based on its ID, column, and new value
  updateCourse(id: number, column: string, value: any): Observable<any> {
    return this.http.put<Courses>('/api/course', { id, column, value });
  }

  // Deletes a course using the course ID
  deleteCourse(id: number): Observable<any> {
    return this.http.delete<Courses>('/api/course', { body: { id } });
  }
}
