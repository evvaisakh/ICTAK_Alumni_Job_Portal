import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostformComponent } from './jobpostform.component';

describe('JobpostformComponent', () => {
  let component: JobpostformComponent;
  let fixture: ComponentFixture<JobpostformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobpostformComponent]
    });
    fixture = TestBed.createComponent(JobpostformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
