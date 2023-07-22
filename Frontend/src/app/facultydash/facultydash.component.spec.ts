import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultydashComponent } from './facultydash.component';

describe('FacultydashComponent', () => {
  let component: FacultydashComponent;
  let fixture: ComponentFixture<FacultydashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultydashComponent]
    });
    fixture = TestBed.createComponent(FacultydashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
