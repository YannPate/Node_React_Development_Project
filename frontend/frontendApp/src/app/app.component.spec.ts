import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  // Préparation du test en configurant le module de test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],  // Ajout de la déclaration du composant
    }).compileComponents();
  });

  // Test pour vérifier si le composant est bien créé
  it('should successfully instantiate the application component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();  // Vérifie si l'instance du composant est créée avec succès
  });

});
