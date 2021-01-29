import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBarSettingPanelComponent } from './right-bar-setting-panel.component';

describe('RightBarSettingPanelComponent', () => {
  let component: RightBarSettingPanelComponent;
  let fixture: ComponentFixture<RightBarSettingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightBarSettingPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightBarSettingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
