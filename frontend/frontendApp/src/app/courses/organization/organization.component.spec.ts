import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganizationComponent } from './organization.component';
import { provideHttpClient, HttpClient } from '@angular/common/http';
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
      declarations: [OrganizationComponent], // Use declarations for components
      providers: [
        ApiServiceService, // Providing ApiService for injection
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: '123' } },
            queryParams: of({ query: 'test' })
          }
        },
        provideHttpClient(),
        provideHttpClientTesting() // Providing the HttpTestingController
      ]
    }).compileComponents();

    // Initialize components and service
    fixture = TestBed.createComponent(OrganizationComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiServiceService); // Get ApiService
    httpTestingController = TestBed.inject(HttpTestingController); // Get HttpTestingController
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

    // Call the method that triggers the HTTP request
    component.loadData(); // Assuming `loadData` method triggers API call

    // Expect a GET request to the correct URL
    const req = httpTestingController.expectOne('YOUR_API_URL_HERE');
    expect(req.request.method).toBe('GET'); // Ensure it's a GET request
    req.flush(mockResponse); // Return mock response

    // Check that the rowData is updated with the mock response
    expect(component.rowData).toEqual(mockResponse);
  });

  afterEach(() => {
    // Ensure there are no pending requests after each test
    httpTestingController.verify();
  });
});
