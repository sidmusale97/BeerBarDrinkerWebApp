import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarInsightsComponent } from './bar-insights.component';

describe('BarInsightsComponent', () => {
  let component: BarInsightsComponent;
  let fixture: ComponentFixture<BarInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
