import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppService } from '../app.service';
import { Meeting } from '../models/meeting.model';

@Component({
  selector: 'app-attend-meeting',
  templateUrl: './attend-meeting.component.html',
  styleUrls: ['./attend-meeting.component.scss']
})
export class AttendMeetingComponent implements OnInit {

  public currentTab = '';
  public meetingId = '';
  public meetingDetail: Meeting['dataObject']['data'];
  public createdMeetingLink = '';
  public creating = false;
  public created: boolean;
  public createError: boolean;
  public name = '';
  public refferedAboNum = '';

  constructor(
    private router: Router,
    private appService: AppService,
    private route: ActivatedRoute
  ) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.currentTab = e.url;
      });
  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
        this.meetingId = routeParams.meetingid;
        this.appService.getMeetingDetails(this.meetingId).subscribe(resp => {
          this.meetingDetail = resp.body.dataObject.data;
        });
      });
  }

  public addAttendee(): void {
    this.creating = true;
    this.created = undefined;
    this.createError = undefined;
    this.createdMeetingLink = '';
    this.appService.addMeetingAttendee(this.name, this.refferedAboNum, this.meetingId).subscribe(resp => {
      this.creating = false;
      this.created = true;
      this.createdMeetingLink = this.meetingDetail[0].meetingLink;
    }, err => {
      this.creating = false;
      this.createError = true;
    });
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


  public clearAll(): void {
    this.creating = false;
    this.createError = undefined;
    this.created = undefined;
    this.createdMeetingLink = '';
    this.name = undefined;
    this.refferedAboNum = undefined;
  }

}
