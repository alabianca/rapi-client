import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapiToggleSwitchComponent } from './rapi-toggle-switch.component';

describe('RapiToggleSwitchComponent', () => {
  let component: RapiToggleSwitchComponent;
  let fixture: ComponentFixture<RapiToggleSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapiToggleSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapiToggleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
