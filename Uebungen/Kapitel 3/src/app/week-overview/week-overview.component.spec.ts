import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekOverviewComponent } from './week-overview.component';

describe('WeekOverviewComponent', () => {
  let component: WeekOverviewComponent;
  let fixture: ComponentFixture<WeekOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
