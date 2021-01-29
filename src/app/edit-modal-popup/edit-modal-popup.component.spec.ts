import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalPopupComponent } from './edit-modal-popup.component';

describe('EditModalPopupComponent', () => {
  let component: EditModalPopupComponent;
  let fixture: ComponentFixture<EditModalPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditModalPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
