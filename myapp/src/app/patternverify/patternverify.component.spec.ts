import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternverifyComponent } from './patternverify.component';

describe('PatternverifyComponent', () => {
  let component: PatternverifyComponent;
  let fixture: ComponentFixture<PatternverifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternverifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
