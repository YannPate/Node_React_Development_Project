import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { FormsModule } from '@angular/forms';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],  // Importation de FormsModule pour ngModel
      declarations: [TodoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a task', () => {
    component.newTask = 'Learn Angular Testing';
    component.addTask();
    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0]).toBe('Learn Angular Testing');
  });

  it('should remove a task', () => {
    component.tasks = ['Learn Angular', 'Write tests'];
    component.removeTask(0);
    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0]).toBe('Write tests');
  });

  it('should reset the input after adding a task', () => {
    component.newTask = 'Learn Angular';
    component.addTask();
    expect(component.newTask).toBe('');
  });
});
