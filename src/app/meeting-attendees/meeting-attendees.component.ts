import { Component, OnInit } from '@angular/core';
import { idText } from 'typescript';
import { AppService } from '../app.service';
import { Attendee } from '../models/attendee.model';

@Component({
  selector: 'app-meeting-attendees',
  templateUrl: './meeting-attendees.component.html',
  styleUrls: ['./meeting-attendees.component.scss']
})
export class MeetingAttendeesComponent implements OnInit {

  public attendeesList: Attendee['dataObject']['data'];
  public admin = false;
  public accessPresent: boolean;
  public abo = '';

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getAllAttendees().subscribe(resp => {
      this.attendeesList = resp.body.dataObject.data;
    });
  }

  public checkAccess(): void {
    this.accessPresent = this.abo === '3777295' || this.abo === '92746646' || this.abo === '14625405';
    if (this.accessPresent) {
      this.admin = true;
      localStorage.setItem('admin', this.abo);
      localStorage.setItem('adminAccess', 'true');
    } else {
      this.admin = false;
      localStorage.setItem('admin', 'false');
      localStorage.setItem('adminAccess', 'false');
    }
  }

  public getLink(id: string): string {
    return 'https://coreteamgateway.pavanaditya.com/attendmeeting/' + id;
  }

}
