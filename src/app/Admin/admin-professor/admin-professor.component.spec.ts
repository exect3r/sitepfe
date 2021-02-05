import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfessorComponent } from './admin-professor.component';

describe('AdminProfessorComponent', () => {
  let component: AdminProfessorComponent;
  let fixture: ComponentFixture<AdminProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProfessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
