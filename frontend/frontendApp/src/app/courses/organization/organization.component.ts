import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, colorSchemeDarkBlue, ModuleRegistry, themeQuartz } from 'ag-grid-community'; 
import { ApiServiceService } from '../../api-service.service';
import { Courses } from '../../models/Courses.dto';
import { RouterLink, RouterOutlet } from '@angular/router';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-organization',
  imports: [AgGridAngular, RouterOutlet, RouterLink],
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'] // Fixed typo: styleUrl -> styleUrls
})
export class OrganizationComponent {

  theme1 = themeQuartz.withPart(colorSchemeDarkBlue);
  private readonly apiService: ApiServiceService = inject(ApiServiceService);
  toAdd: string = 'creation';
  addButton: string = 'ADD';

  rowDataModA: Courses[] = [];
  rowDataModB: Courses[] = [];
  rowDataModC: Courses[] = [];

  colDefs: ColDef[] = [
    { field: 'course', flex: 1, cellStyle: { fontSize: '20px' } },
    { field: 'module', flex: 1, cellStyle: { fontSize: '20px' } },
  ];

  rowSelection: 'multiple' = 'multiple';

  ngOnInit(): void {
    this.loadData();
    this.addButton = 'ADD';
  }

  loadData(): void {
    this.apiService.getCourses().subscribe({
      next: data => {
        this.rowDataModA = data.filter(item => item.moduleName === 'Standard Track');
        this.rowDataModB = data.filter(item => item.moduleName === 'CCC');
        this.rowDataModC = data.filter(item => item.moduleName === 'Computer Science');
      },
      error: err => {
        console.error('Error fetching courses:', err);
        alert('An error occurred while loading the courses.');
      }
    });
  }

  addToogleButton(): void {
    switch (this.addButton) {
      case 'ADD':
        this.addButton = 'CANCEL';
        this.toAdd = './';
        break;
      case 'CANCEL':
        this.addButton = 'ADD';
        this.toAdd = 'creation';
        break;
      default:
        break;
    }
  }

  onCellKeyDown(event: any): void {
    if (event.event.key === 'd') {
      const id = event.data.id;
      if (confirm('Are you sure you want to delete this course?')) {
        this.apiService.deleteCourse(id).subscribe({
          next: () => {
            console.log('Course deleted');
            alert('Course deleted successfully.');
            this.loadData(); // Refresh data after deletion
          },
          error: err => {
            console.error('Error deleting course:', err);
            alert('An error occurred while deleting the course.');
          }
        });
      }
    }
  }

}
