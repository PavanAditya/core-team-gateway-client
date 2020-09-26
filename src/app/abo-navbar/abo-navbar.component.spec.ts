import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboNavbarComponent } from './abo-navbar.component';

describe('AboNavbarComponent', () => {
  let component: AboNavbarComponent;
  let fixture: ComponentFixture<AboNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
