import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsRootComponent } from './metrics-root.component';

describe('MetricsRootComponent', () => {
  let component: MetricsRootComponent;
  let fixture: ComponentFixture<MetricsRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricsRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
