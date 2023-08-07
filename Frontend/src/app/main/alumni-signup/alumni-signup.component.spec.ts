import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniSignupComponent } from './alumni-signup.component';

describe('AlumniSignupComponent', () => {
  let component: AlumniSignupComponent;
  let fixture: ComponentFixture<AlumniSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumniSignupComponent]
    });
    fixture = TestBed.createComponent(AlumniSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
