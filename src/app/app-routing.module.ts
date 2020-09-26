import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMeetingsComponent } from './all-meetings/all-meetings.component';
import { AttendMeetingComponent } from './attend-meeting/attend-meeting.component';
import { CoreMembersComponent } from './core-members/core-members.component';
import { HomeComponent } from './home/home.component';
import { MeetingAttendeesComponent } from './meeting-attendees/meeting-attendees.component';
import { NewCoreMemberComponent } from './new-core-member/new-core-member.component';
import { NewMeetingComponent } from './new-meeting/new-meeting.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'attendmeeting/:meetingid', component: AttendMeetingComponent },
  { path: 'meetingattendees', component: MeetingAttendeesComponent },
  { path: 'allmeetings', component: AllMeetingsComponent },
  { path: 'newmeeting', component: NewMeetingComponent },
  { path: 'coremembers', component: CoreMembersComponent },
  { path: 'addcoremember', component: NewCoreMemberComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
