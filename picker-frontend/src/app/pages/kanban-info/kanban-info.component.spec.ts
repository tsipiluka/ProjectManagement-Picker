import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanInfoComponent } from './kanban-info.component';

describe('KanbanInfoComponent', () => {
  let component: KanbanInfoComponent;
  let fixture: ComponentFixture<KanbanInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
