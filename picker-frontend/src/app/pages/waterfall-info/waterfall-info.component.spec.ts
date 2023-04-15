import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterfallInfoComponent } from './waterfall-info.component';

describe('WaterfallInfoComponent', () => {
  let component: WaterfallInfoComponent;
  let fixture: ComponentFixture<WaterfallInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterfallInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterfallInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
