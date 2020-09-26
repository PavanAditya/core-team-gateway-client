import { Component, OnInit } from '@angular/core';
import { CoreMember } from '../models/core-member.model';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core-members',
  templateUrl: './core-members.component.html',
  styleUrls: ['./core-members.component.scss']
})
export class CoreMembersComponent implements OnInit {

  public coreMembersList: CoreMember['dataObject']['data'];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getCoreMembers().subscribe(resp => {
      this.coreMembersList = resp.body.dataObject.data;
    });
  }

}
