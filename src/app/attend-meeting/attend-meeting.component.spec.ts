import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendMeetingComponent } from './attend-meeting.component';

describe('AttendMeetingComponent', () => {
  let component: AttendMeetingComponent;
  let fixture: ComponentFixture<AttendMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
