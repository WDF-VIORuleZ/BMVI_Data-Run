import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewCmComponent } from './dialog-new-cm.component';

describe('DialogNewCmComponent', () => {
  let component: DialogNewCmComponent;
  let fixture: ComponentFixture<DialogNewCmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogNewCmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewCmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
