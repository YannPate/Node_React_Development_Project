import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeadlineComponent } from './deadline.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DeadlineComponent', () => {
  let component: DeadlineComponent;
  let fixture: ComponentFixture<DeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: '123' } },
            queryParams: of({ query: 'test' })
          }
        },
        provideHttpClient(),
        provideHttpClientTesting()
      ],
      imports: [DeadlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle creation button text and link', () => {
    const initialToAdd = component.toAdd;
    const initialAddButton = component.addButton;

    component.toggleCreation();
    fixture.detectChanges();

    expect(component.toAdd).not.toEqual(initialToAdd);
    expect(component.addButton).not.toEqual(initialAddButton);
  });

  it('should have rowData defined after ngOnInit', () => {
    expect(component.rowData).toBeDefined();
  });
});
