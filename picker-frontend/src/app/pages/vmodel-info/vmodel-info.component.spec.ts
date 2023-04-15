import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmodelInfoComponent } from './vmodel-info.component';

describe('VmodelInfoComponent', () => {
  let component: VmodelInfoComponent;
  let fixture: ComponentFixture<VmodelInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmodelInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmodelInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
