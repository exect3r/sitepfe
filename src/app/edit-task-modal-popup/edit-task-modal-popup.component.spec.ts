import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskModalPopupComponent } from './edit-task-modal-popup.component';

describe('EditTaskModalPopupComponent', () => {
  let component: EditTaskModalPopupComponent;
  let fixture: ComponentFixture<EditTaskModalPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTaskModalPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaskModalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
