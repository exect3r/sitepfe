import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectContentAreaComponent } from './project-content-area.component';

describe('ProjectContentAreaComponent', () => {
  let component: ProjectContentAreaComponent;
  let fixture: ComponentFixture<ProjectContentAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectContentAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectContentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
