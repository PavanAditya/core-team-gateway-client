import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingAttendeesComponent } from './meeting-attendees.component';

describe('MeetingAttendeesComponent', () => {
  let component: MeetingAttendeesComponent;
  let fixture: ComponentFixture<MeetingAttendeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingAttendeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingAttendeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
