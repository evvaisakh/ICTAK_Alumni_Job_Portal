import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboComponent } from './dashbo.component';

describe('DashboComponent', () => {
  let component: DashboComponent;
  let fixture: ComponentFixture<DashboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboComponent]
    });
    fixture = TestBed.createComponent(DashboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
