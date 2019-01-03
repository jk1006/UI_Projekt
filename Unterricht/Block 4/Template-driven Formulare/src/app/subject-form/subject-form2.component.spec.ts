import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectForm2Component } from './subject-form2.component';

describe('SubjectForm2Component', () => {
  let component: SubjectForm2Component;
  let fixture: ComponentFixture<SubjectForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
