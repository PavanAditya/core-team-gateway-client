import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreMembersComponent } from './core-members.component';

describe('CoreMembersComponent', () => {
  let component: CoreMembersComponent;
  let fixture: ComponentFixture<CoreMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
