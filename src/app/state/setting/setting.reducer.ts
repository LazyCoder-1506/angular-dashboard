import { createReducer, on } from '@ngrx/store'
import * as SettingActions from './setting.action'
import { Setting } from './setting.model';

export interface SettingState {
  settings: Setting;
  isLoading: boolean;
  error: string | null;
}

export const initialState: SettingState = {
  settings: {
    layout: 'row',
    cardSize: 'large',
    chartType: 'donut',
    sectionOrder: ['cards', 'charts', 'yearly'],
    cardOrder: ['population', 'ER', 'admission', 'cost', 'specialist'],
    chartOrder: ['age', 'location'],
  },
  isLoading: true,
  error: null
}

export const settingReducer = createReducer(initialState,
  on(SettingActions.getSettings, (state) => ({ ...state, isLoading: true })),
  on(SettingActions.getSettingsSuccess, (state, action) => ({ ...state, isLoading: false, settings: action.settings })),
  on(SettingActions.getSettingsError, (state, action) => ({ ...state, isLoading: false, error: action.error })),
)