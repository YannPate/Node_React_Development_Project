import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreationCourseComponent } from './creation-course.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms'; // ✅ Ajout pour `ngModel`
import { By } from '@angular/platform-browser'; // ✅ Permet de sélectionner des éléments HTML

describe('CreationCourseComponent', () => {
  let component: CreationCourseComponent;
  let fixture: ComponentFixture<CreationCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreationCourseComponent], // ✅ Déplacer ici
      imports: [FormsModule], // ✅ Ajout de `FormsModule` pour éviter les erreurs de `ngModel`
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable the button when fields are empty', () => {
    fixture.detectChanges(); // Rafraîchir la vue

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.disabled).toBeTruthy(); // ✅ Vérifier que le bouton est désactivé au départ

    // Remplir les champs
    component.course.course = 'Test Course';
    component.course.module = 'Test Module';
    fixture.detectChanges(); // Mettre à jour la vue

    expect(button.disabled).toBeFalsy(); // ✅ Vérifier que le bouton est activé après remplissage
  });
});
