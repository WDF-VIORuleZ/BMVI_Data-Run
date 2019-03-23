import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCmComponent } from './view-cm.component';

describe('ViewCmComponent', () => {
  let component: ViewCmComponent;
  let fixture: ComponentFixture<ViewCmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
