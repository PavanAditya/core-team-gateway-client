import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CoreMember } from '../models/core-member.model';

@Component({
  selector: 'app-new-core-member',
  templateUrl: './new-core-member.component.html',
  styleUrls: ['./new-core-member.component.scss']
})
export class NewCoreMemberComponent implements OnInit {

  public admin = false;
  public coreMembersList: CoreMember['dataObject']['data'];
  public makeAdmin = false;
  public canMakeAdmin = false;
  public abo: string;
  public aboNum: string;
  public name: string;
  public noAccessPresent = false;
  public adding = false;
  public addError = false;
  public added = false;
  public addedAbo = '';

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('adminAccess') !== null) {
      this.admin = localStorage.getItem('adminAccess') !== 'false';
    }
    if (localStorage.getItem('canMakeAdmin') !== null) {
      this.canMakeAdmin = localStorage.getItem('canMakeAdmin') !== 'false';
    }
    this.appService.getCoreMembers().subscribe(resp => {
      this.coreMembersList = resp.body.dataObject.data;
    });
  }

  public checkAccess(): void {
    console.log(this.abo, 'k');
    const aboObj = this.coreMembersList.find(ele => (ele.aboNum === this.abo + '') && ele.admin);
    if (aboObj) {
      this.admin = true;
      this.canMakeAdmin = true;
      localStorage.setItem('admin', this.abo + '');
      localStorage.setItem('adminAccess', 'true');
      localStorage.setItem('canMakeAdmin', 'true');
    } else {
      const aboObject = this.coreMembersList.find(ele => ele.aboNum === this.abo + '');
      if (aboObject) {
        this.admin = true;
        this.canMakeAdmin = false;
        localStorage.setItem('admin', this.abo + '');
        localStorage.setItem('adminAccess', 'true');
        localStorage.setItem('canMakeAdmin', 'false');
      } else {
        this.admin = false;
        this.canMakeAdmin = false;
        localStorage.setItem('admin', 'false');
        localStorage.setItem('adminAccess', 'false');
        localStorage.setItem('canMakeAdmin', 'false');
      }
    }
  }

  public addCoreMember(): void {
    if (this.name && this.aboNum) {
      this.adding = true;
      this.appService.addCoreMember(this.name, this.aboNum, this.makeAdmin, localStorage.getItem('admin')).subscribe(resp => {
        this.adding = false;
        this.added = true;
        this.addedAbo = localStorage.getItem('admin');
      }, err => {
        this.addError = true;
      });
    }
  }

}
