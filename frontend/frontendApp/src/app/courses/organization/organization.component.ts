import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, colorSchemeDarkBlue, ModuleRegistry, themeQuartz } from 'ag-grid-community'; 
import { ApiServiceService } from '../../api-service.service';
import { Courses } from '../../models/Courses.dto';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-organization',
  standalone: true, 
  imports: [AgGridAngular, RouterOutlet, RouterLink, CommonModule, AgGridModule],
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent {
  rowData(rowData: any) {
    throw new Error('Method not implemented.');
  }
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
      next: (data: any) => {
        this.rowDataModA = data.filter((item: any) => item.moduleName === 'Standard Track');
        this.rowDataModB = data.filter((item: any) => item.moduleName === 'CCC');
        this.rowDataModC = data.filter((item: any) => item.moduleName === 'Computer Science');
      },
      error: (err: any) => {
        console.error('Error fetching courses:', err);
        alert('An error occurred while loading the courses.');
      }
    });
  }

  getRowData(index: number): Courses[] {
    return index === 0 ? this.rowDataModA : index === 1 ? this.rowDataModB : this.rowDataModC;
  }

  addToogleButton(): void {
    this.addButton = this.addButton === 'ADD' ? 'CANCEL' : 'ADD';
    this.toAdd = this.addButton === 'ADD' ? 'creation' : './';
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
          error: (err: any) => {
            console.error('Error deleting course:', err);
            alert('An error occurred while deleting the course.');
          }
        });
      }
    }
  }
}
