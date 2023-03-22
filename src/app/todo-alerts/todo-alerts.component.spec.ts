import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAlertsComponent } from './todo-alerts.component';

describe('TodoAlertsComponent', () => {
  let component: TodoAlertsComponent;
  let fixture: ComponentFixture<TodoAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
