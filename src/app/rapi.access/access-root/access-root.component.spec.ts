import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRootComponent } from './access-root.component';

describe('AccessRootComponent', () => {
  let component: AccessRootComponent;
  let fixture: ComponentFixture<AccessRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
