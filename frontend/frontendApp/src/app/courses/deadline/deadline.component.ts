import { Component, inject, OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { AgGridAngular } from 'ag-grid-angular';
import { Courses } from '../../models/Courses.dto';

// Ag-grid imports
import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, colorSchemeDarkBlue, ModuleRegistry, themeQuartz } from 'ag-grid-community'; 
import { RouterLink, RouterOutlet } from '@angular/router';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-deadline',
  imports: [AgGridAngular, RouterOutlet, RouterLink],
  templateUrl: './deadline.component.html',
  styleUrl: './deadline.component.css'
})
export class DeadlineComponent implements OnInit {
  private readonly apiService: ApiServiceService = inject(ApiServiceService);
  theme1 = themeQuartz.withPart(colorSchemeDarkBlue);

  // Toggle Button
  toAdd: string = "creation";
  addButton: string = "ADD";

  rowData: Courses[] = [];

  colDefs: ColDef[] = [
    { field: "course", flex: 1 },
    { field: "module", flex: 1 },
    {
      field: "tdSubmission",
      editable: true,
      enableCellChangeFlash: true,
      flex: 1
    },
    {
      field: "nextExam",
      editable: true,
      enableCellChangeFlash: true,
      flex: 1
    },
    {
      field: "project",
      editable: true,
      enableCellChangeFlash: true,
      flex: 1
    },
  ];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.apiService.getCourses().subscribe({
      next: data => this.rowData = data
        .map(item => ({
          id: item.id,
          course: item.course,
          module: item.module,
          tdSubmission: this.dateToString(item.tdSubmission),
          nextExam: this.dateToString(item.nextExam),
          project: this.dateToString(item.project)
        }))
        .filter(item => ["Standard Track", "CCC", "Computer Science"].includes(item.module)), // ✅ Plus efficace
      error: err => console.error('Deadline Component', err)
    });
  }

  onCellKeyDown(event: any): void {
    if (event.event.key === "Enter") {
      const row = event.data;
      const column = event.colDef.field;
      const formattedCell = this.toISOFormat(row[column]).toISOString();

      this.apiService.updateCourse(row.id, column, formattedCell).subscribe({
        next: () => console.log("ok"),
        error: err => console.error('Error at the deadline Component', err)
      });
    }
  }

  dateToString(unformattedDate: string | null): string | null {
    if (!unformattedDate) return "none";

    const date = new Date(unformattedDate);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear().toString().slice(-2);

    return `${day}-${month}-${year}`;
  }

  toISOFormat(date: string): Date {
    const [day, month, year] = date.split('-').map(Number);
    return new Date(`20${year}-${month}-${day}`);
  }

  toggleCreation() {
    this.addButton = this.addButton === "ADD" ? "CANCEL" : "ADD";
    this.toAdd = this.addButton === "ADD" ? "creation" : "./";
  }
}
