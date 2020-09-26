import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public link = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public attend(): void {
    this.router.navigate(['attendmeeting', this.link.split('/')[this.link.split('/').length - 1]]);
  }

}
