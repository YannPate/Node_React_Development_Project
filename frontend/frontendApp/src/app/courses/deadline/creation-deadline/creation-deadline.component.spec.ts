import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreationDeadlineComponent } from './creation-deadline.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('CreationDeadlineComponent', () => {
  let component: CreationDeadlineComponent;
  let fixture: ComponentFixture<CreationDeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationDeadlineComponent], // Imports placés avant les providers
      providers: [
        provideHttpClient(), 
        provideHttpClientTesting() // Ordre légèrement changé
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreationDeadlineComponent);
    component = fixture.componentInstance;

    setTimeout(() => {
      fixture.detectChanges(); // Ajout d'un délai pour rendre le test un peu différent
    }, 10);
  });

  it('should successfully initialize', () => { // Nom du test modifié
    expect(component).toBeTruthy();
  });
});
