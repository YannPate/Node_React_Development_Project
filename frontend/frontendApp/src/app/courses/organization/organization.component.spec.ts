import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganizationComponent } from './organization.component';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ApiServiceService } from '../../api-service.service';

// Test HTTP requests and service methods
describe('OrganizationComponent', () => {
  let component: OrganizationComponent;
  let fixture: ComponentFixture<OrganizationComponent>;
  let httpTestingController: HttpTestingController;
  let apiService: ApiServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationComponent], // Déclaration du composant
      providers: [
        ApiServiceService, // Fourniture du service API
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: '123' } },
            queryParams: of({ query: 'test' })
          }
        },
        provideHttpClient(),
        provideHttpClientTesting() // Fourniture du HttpTestingController
      ]
    }).compileComponents();

    // Initialisation des composants et services
    fixture = TestBed.createComponent(OrganizationComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiServiceService); // Injection du service API
    httpTestingController = TestBed.inject(HttpTestingController); // Injection du HttpTestingController
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make HTTP requests to get row data', () => {
    const mockResponse = [
      { id: 1, course: 'Course 1', module: 'Module 1' },
      { id: 2, course: 'Course 2', module: 'Module 2' }
    ];

    // Appelle la méthode qui déclenche la requête HTTP
    component.loadData();

    // Vérifie qu'une requête GET a bien été effectuée
    const req = httpTestingController.expectOne('YOUR_API_URL_HERE');
    expect(req.request.method).toBe('GET'); // Vérifie que la requête est bien un GET
    req.flush(mockResponse); // Retourne une réponse fictive

    // Vérifie que rowData a bien été mis à jour avec la réponse simulée
    expect(component.rowData).toEqual(mockResponse);
  });

  afterEach(() => {
    // Vérifie qu'aucune requête n'est en attente après chaque test
    httpTestingController.verify();
  });
});
