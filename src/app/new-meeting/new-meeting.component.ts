import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Meeting } from '../models/meeting.model';

@Component({
  selector: 'app-new-meeting',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.scss']
})
export class NewMeetingComponent implements OnInit {

  public meetingsList: Meeting['dataObject']['data'];
  public createdMeetingLink: string;
  public admin = false;
  public accessPresent: boolean;
  public abo = '';
  public name: string;
  public meetingDate: string;
  public meetingLink: string;
  public creating = false;
  public created: boolean;
  public createError: boolean;

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
      localStorage.setItem('admin', this.abo);
      localStorage.setItem('adminAccess', 'true');
    } else {
      this.admin = false;
      localStorage.setItem('admin', 'false');
      localStorage.setItem('adminAccess', 'false');
    }
  }

  public clickToCopy(val: string): void {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  public createMeetingLink(): void {
    this.creating = true;
    this.appService.addMeeting(this.name, this.meetingDate, this.meetingLink, localStorage.getItem('admin')).subscribe(resp => {
      this.creating = false;
      this.created = true;
      this.createdMeetingLink = 'https://coreteamgateway.pavanaditya.com/attendmeeting/' + resp.body.dataObject.data;
    }, err => {
      this.createError = true;
    });
  }

  public clearAll(): void {
    this.creating = false;
    this.createError = undefined;
    this.created = undefined;
    this.createdMeetingLink = '';
    this.name = undefined;
    this.meetingDate = undefined;
    this.meetingLink = undefined;
  }

}
