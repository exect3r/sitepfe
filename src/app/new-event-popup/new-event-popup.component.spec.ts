import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventPopupComponent } from './new-event-popup.component';

describe('NewEventPopupComponent', () => {
  let component: NewEventPopupComponent;
  let fixture: ComponentFixture<NewEventPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEventPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
