import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public link = '';
  public emptyLink: boolean;
  public showJoinMeet = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public navigateToCreate(): void {
    this.router.navigate(['/newmeeting']);
  }

  public attend(): void {
    if (this.link !== '') {
      this.router.navigate(['attendmeeting', this.link.split('/')[this.link.split('/').length - 1]]);
    } else {
      this.emptyLink = true;
    }
  }

  public joinMeeting(): void {
    this.showJoinMeet = !this.showJoinMeet;
  }

}
