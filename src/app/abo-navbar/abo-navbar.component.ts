import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppService } from '../app.service';
import { CoreMember } from '../models/core-member.model';

@Component({
  selector: 'app-abo-navbar',
  templateUrl: './abo-navbar.component.html',
  styleUrls: ['./abo-navbar.component.scss']
})
export class AboNavbarComponent implements OnInit {

  public currentTab = '';
  public admin = false;
  public coreMembersList: CoreMember['dataObject']['data'];
  public abo: boolean;
  public loggedIn = false;

  constructor(
    private router: Router,
    private appService: AppService
  ) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.currentTab = e.url;
      });
  }

  ngOnInit(): void {
    this.appService.getCoreMembers().subscribe(resp => {
      this.coreMembersList = resp.body.dataObject.data;
      this.checkLocalStorage();
    });
  }

  public checkLocalStorage(): boolean {
    if (localStorage.getItem('admin')) {
      return true;
    } else {
      return false;
    }
  }

  public routeName(route: string): boolean {
    return this.currentTab.includes(route);
  }

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  public logout(): void {
    localStorage.clear();
    location.reload();
  }

}
