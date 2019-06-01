import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupContainerComponent } from './setup-container.component';

describe('SetupContainerComponent', () => {
  let component: SetupContainerComponent;
  let fixture: ComponentFixture<SetupContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
