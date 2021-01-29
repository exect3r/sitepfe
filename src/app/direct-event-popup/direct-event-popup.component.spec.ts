import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectEventPopupComponent } from './direct-event-popup.component';

describe('DirectEventPopupComponent', () => {
  let component: DirectEventPopupComponent;
  let fixture: ComponentFixture<DirectEventPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectEventPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectEventPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
