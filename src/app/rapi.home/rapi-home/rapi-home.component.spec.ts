import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapiHomeComponent } from './rapi-home.component';

describe('RapiHomeComponent', () => {
  let component: RapiHomeComponent;
  let fixture: ComponentFixture<RapiHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapiHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
