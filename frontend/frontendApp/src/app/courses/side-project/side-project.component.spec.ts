import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideProjectComponent } from './side-project.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule si tu utilises ngModel

describe('SideProjectComponent', () => {
  let component: SideProjectComponent;
  let fixture: ComponentFixture<SideProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideProjectComponent, FormsModule]  // Assure-toi que FormsModule est importé si tu utilises ngModel
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a project', () => {
    // Initialisation du projet
    const initialProjectCount = component.projects.length;

    // Simulation de l'ajout d'un projet
    component.newProject = { name: 'New Project', description: 'Description of New Project' };
    component.createProject();

    // Vérifier que le nombre de projets a augmenté de 1
    expect(component.projects.length).toBe(initialProjectCount + 1);

    // Vérifier si le dernier projet ajouté est celui que nous avons simulé
    expect(component.projects[component.projects.length - 1].name).toBe('New Project');
    expect(component.projects[component.projects.length - 1].description).toBe('Description of New Project');
  });

  it('should clear the form after adding a project', () => {
    // Initialisation des valeurs du formulaire
    component.newProject = { name: 'New Project', description: 'Description of New Project' };

    // Simuler l'ajout du projet
    component.createProject();

    // Vérifier que les champs du formulaire sont réinitialisés
    expect(component.newProject.name).toBe('');
    expect(component.newProject.description).toBe('');
  });
});
