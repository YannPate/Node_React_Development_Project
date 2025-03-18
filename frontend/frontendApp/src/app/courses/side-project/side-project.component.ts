import { Component } from '@angular/core';

@Component({
  selector: 'app-side-project',
  templateUrl: './side-project.component.html',
  styleUrls: ['./side-project.component.css']
})
export class SideProjectComponent {

  projects: { name: string, description: string }[] = [];
  newProject: { name: string, description: string } = { name: '', description: '' };

  // Méthode pour ajouter un projet à la liste
  createProject() {
    if (this.newProject.name && this.newProject.description) {
      this.projects.push({ ...this.newProject });
      this.newProject = { name: '', description: '' };  // Reset form
    }
  }
}
