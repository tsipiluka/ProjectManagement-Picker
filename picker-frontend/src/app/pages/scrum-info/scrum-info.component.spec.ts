import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumInfoComponent } from './scrum-info.component';

describe('ScrumInfoComponent', () => {
  let component: ScrumInfoComponent;
  let fixture: ComponentFixture<ScrumInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrumInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
