import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfesComponent } from './pfes.component';

describe('PfesComponent', () => {
  let component: PfesComponent;
  let fixture: ComponentFixture<PfesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
