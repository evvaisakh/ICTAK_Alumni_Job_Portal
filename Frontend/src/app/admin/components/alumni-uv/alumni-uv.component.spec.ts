import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniUvComponent } from './alumni-uv.component';

describe('AlumniUvComponent', () => {
  let component: AlumniUvComponent;
  let fixture: ComponentFixture<AlumniUvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumniUvComponent]
    });
    fixture = TestBed.createComponent(AlumniUvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
