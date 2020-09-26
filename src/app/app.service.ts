import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { CoreMember } from './models/core-member.model';
import { Meeting } from './models/meeting.model';
import { Attendee } from './models/attendee.model';
import { AddAttendee } from './models/add-attendee.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private BASE_URL = environment.baseUrl;
  private GET_CORE_MEMS = `/coremembers`;
  private ADD_CORE_MEM = `/coremember/new`;
  private GET_MEETINGS = `/meetings`;
  private ADD_MEETING = `/meeting/new`;
  private GET_ATTENDEES = `/attendees`;
  private ADD_ATTENDEE = `/attendee/new/`;
  private GET_MEETING_DETAIL = `/meeting/`;

  constructor(
    private http: HttpClient
  ) { }

  public getCoreMembers(): Observable<HttpResponse<CoreMember>> {
    return this.http.get<HttpResponse<CoreMember>>(`${this.BASE_URL + this.GET_CORE_MEMS}`, { observe: 'response' as 'body' });
  }

  public getAllMeetings(): Observable<HttpResponse<Meeting>> {
    return this.http.get<HttpResponse<Meeting>>(`${this.BASE_URL + this.GET_MEETINGS}`, { observe: 'response' as 'body' });
  }

  public getAllAttendees(): Observable<HttpResponse<Attendee>> {
    return this.http.get<HttpResponse<Attendee>>(`${this.BASE_URL + this.GET_ATTENDEES}`, { observe: 'response' as 'body' });
  }

  public getMeetingDetails(meetingId: string): Observable<HttpResponse<Meeting>> {
    return this.http.get<HttpResponse<Meeting>>(`${this.BASE_URL + this.GET_MEETING_DETAIL + meetingId}`,
      { observe: 'response' as 'body' });
  }

  public addCoreMember(name: string, aboNum: string, admin: boolean, addedBy: string): Observable<HttpResponse<CoreMember>> {
    return this.http.post<HttpResponse<CoreMember>>(`${this.BASE_URL + this.ADD_CORE_MEM}`, {
      name,
      aboNum,
      admin,
      addedBy
    }, { observe: 'response' as 'body' });
  }

  public addMeeting(name: string, meetingDate: string, meetingLink: string, addedBy: string): Observable<HttpResponse<CoreMember>> {
    return this.http.post<HttpResponse<CoreMember>>(`${this.BASE_URL + this.ADD_MEETING}`, {
      name,
      meetingDate,
      meetingLink,
      addedBy
    }, { observe: 'response' as 'body' });
  }

  public addMeetingAttendee(name: string, refferedAboNum: string, attendedMeetingId: string): Observable<HttpResponse<CoreMember>> {
    return this.http.post<HttpResponse<CoreMember>>(`${this.BASE_URL + this.ADD_ATTENDEE + refferedAboNum}`, {
      name,
      refferedAboNum,
      attendedMeetingId
    }, { observe: 'response' as 'body' });
  }

}
