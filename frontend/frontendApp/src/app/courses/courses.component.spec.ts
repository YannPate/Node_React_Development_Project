import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  // Configuration de l'environnement de test avant chaque test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesComponent]  // Le composant à tester
    }).compileComponents();  // Compilation des composants pour initialisation

    // Création de l'instance du composant et récupération de l'élément
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Détection des changements pour initialiser le composant
  });

  // Test de création du composant
  it('should successfully create the Courses component', () => {
    expect(component).toBeDefined();  // Vérification si l'instance du composant est définie
  });
});
