import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Meeting } from '../models/meeting.model';

@Component({
  selector: 'app-all-meetings',
  templateUrl: './all-meetings.component.html',
  styleUrls: ['./all-meetings.component.scss']
})
export class AllMeetingsComponent implements OnInit {

  public meetingsList: Meeting['dataObject']['data'];
  public admin = false;
  public accessPresent: boolean;
  public abo = '';

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getAllMeetings().subscribe(resp => {
      this.meetingsList = resp.body.dataObject.data;
    });
  }

  public checkAccess(): void {
    this.accessPresent = this.abo === '3777295' || this.abo === '92746646' || this.abo === '14625405';
    if (this.accessPresent) {
      this.admin = true;
    } else {
      this.admin = false;
    }
  }

  public getLink(uri: string): string {
    return 'https://coreteamgateway.pavanaditya.com/attendmeeting/' + uri;
  }

}
