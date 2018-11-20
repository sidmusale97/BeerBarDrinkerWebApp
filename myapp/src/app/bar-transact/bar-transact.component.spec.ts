import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTransactComponent } from './bar-transact.component';

describe('BarTransactComponent', () => {
  let component: BarTransactComponent;
  let fixture: ComponentFixture<BarTransactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarTransactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarTransactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
