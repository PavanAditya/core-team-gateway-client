import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoreMemberComponent } from './new-core-member.component';

describe('NewCoreMemberComponent', () => {
  let component: NewCoreMemberComponent;
  let fixture: ComponentFixture<NewCoreMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCoreMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoreMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
