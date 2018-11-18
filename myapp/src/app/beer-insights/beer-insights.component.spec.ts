import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerInsightsComponent } from './beer-insights.component';

describe('BeerInsightsComponent', () => {
  let component: BeerInsightsComponent;
  let fixture: ComponentFixture<BeerInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
