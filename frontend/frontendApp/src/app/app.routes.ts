import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { OrganizationComponent } from './courses/organization/organization.component';
import { DeadlineComponent } from './courses/deadline/deadline.component';
import { TodoListComponent } from './courses/todo-list/todo-list.component';
import { SideProjectComponent } from './courses/side-project/side-project.component';
import { CreationCourseComponent } from './courses/organization/creation-course/creation-course.component';
import { CreationDeadlineComponent } from './courses/deadline/creation-deadline/creation-deadline.component';

export const routes: Routes = [
  // Route d'accueil - Redirige vers le composant Login
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "welcome",
    component: CoursesComponent,
    children: [
      {
        path: "organization-part",
        component: OrganizationComponent,
        children: [
          // Route pour la création de cours dans la partie organisation
          {
            path: "creation",
            component: CreationCourseComponent
          }
        ]
      },
      {
        path: "deadline-part",
        component: DeadlineComponent,
        children: [
          // Route pour la création des deadlines
          {
            path: "creation",
            component: CreationDeadlineComponent
          }
        ]
      },
      {
        path: "todo-list-part",
        component: TodoListComponent  // Route vers le composant Todo List
      },
      {
        path: "side-project-part",
        component: SideProjectComponent  // Route vers le composant Side Project
      }
    ]
  }
];
