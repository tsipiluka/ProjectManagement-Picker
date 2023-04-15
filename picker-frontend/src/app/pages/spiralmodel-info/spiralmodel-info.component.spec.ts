import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiralmodelInfoComponent } from './spiralmodel-info.component';

describe('SpiralmodelInfoComponent', () => {
  let component: SpiralmodelInfoComponent;
  let fixture: ComponentFixture<SpiralmodelInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiralmodelInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpiralmodelInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
