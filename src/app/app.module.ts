import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendMeetingComponent } from './attend-meeting/attend-meeting.component';
import { MeetingAttendeesComponent } from './meeting-attendees/meeting-attendees.component';
import { AllMeetingsComponent } from './all-meetings/all-meetings.component';
import { NewMeetingComponent } from './new-meeting/new-meeting.component';
import { CoreMembersComponent } from './core-members/core-members.component';
import { NewCoreMemberComponent } from './new-core-member/new-core-member.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AboNavbarComponent } from './abo-navbar/abo-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendMeetingComponent,
    MeetingAttendeesComponent,
    AllMeetingsComponent,
    NewMeetingComponent,
    CoreMembersComponent,
    NewCoreMemberComponent,
    HomeComponent,
    AboNavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
