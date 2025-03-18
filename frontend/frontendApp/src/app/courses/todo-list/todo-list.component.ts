import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: string[] = [];  // Liste des tâches
  newTask: string = '';  // Valeur pour la nouvelle tâche à ajouter

  // Méthode pour ajouter une tâche à la liste
  addTask() {
    if (this.newTask) {
      this.tasks.push(this.newTask);
      this.newTask = '';  // Réinitialiser le champ après l'ajout
    }
  }

  // Méthode pour supprimer une tâche de la liste
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
