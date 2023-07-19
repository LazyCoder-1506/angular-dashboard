import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './body.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Setting } from 'src/app/state/setting/setting.model';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { settingsSelector } from 'src/app/state/setting/setting.selector';
import { getSettings } from 'src/app/state/setting/setting.action';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  let mockStore: MockStore<Setting>;
  let mockSettingSelector;

  const initialSettingState: Setting = {
    layout: 'row',
    cardSize: 'large',
    chartType: 'donut',
    sectionOrder: ['cards', 'charts', 'yearly'],
    cardOrder: ['population', 'ER', 'admission', 'cost', 'specialist'],
    chartOrder: ['age', 'location'],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ provideMockStore() ]
    });
    mockStore = TestBed.inject(MockStore);
    mockSettingSelector = mockStore.overrideSelector(settingsSelector, initialSettingState);
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch action on initializing', () => {
    const dispatchSpy = spyOn(mockStore, 'dispatch').and.callThrough();

    component.ngOnInit();

    expect(dispatchSpy).toHaveBeenCalledWith(getSettings());
  });
});
