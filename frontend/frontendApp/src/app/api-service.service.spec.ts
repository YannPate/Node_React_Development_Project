import { TestBed } from '@angular/core/testing';
import { ApiServiceService } from './api-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Unit test setup for ApiServiceService to verify the HTTP client functionality
describe('ApiServiceService', () => {
  let service: ApiServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Include HttpClientTestingModule to test HTTP requests
      providers: [ApiServiceService]      // Provide the service to be tested
    });
    service = TestBed.inject(ApiServiceService); // Inject ApiServiceService into the test suite
    httpMock = TestBed.inject(HttpTestingController); // Inject HttpTestingController for mocking HTTP requests
  });

  it('should be instantiated successfully', () => {
    expect(service).toBeTruthy();  // Verify the service has been created correctly
  });

  afterEach(() => {
    // Ensure that no outstanding HTTP requests are left unhandled
    httpMock.verify();
  });
});
