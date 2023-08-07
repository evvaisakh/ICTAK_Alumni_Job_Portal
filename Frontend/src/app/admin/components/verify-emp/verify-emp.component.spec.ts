import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmpComponent } from './verify-emp.component';

describe('VerifyEmpComponent', () => {
  let component: VerifyEmpComponent;
  let fixture: ComponentFixture<VerifyEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyEmpComponent]
    });
    fixture = TestBed.createComponent(VerifyEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
