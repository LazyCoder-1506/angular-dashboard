import { getSettings, getSettingsError, getSettingsSuccess, updateSettings } from "./setting.action";
import { Setting } from "./setting.model";
import { SettingState, initialState, settingReducer } from "./setting.reducer";

describe('Setting Reducer', () => {
  let state: SettingState;

  beforeEach(() => {
    state = initialState;
  });

  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = { type: 'Unknown' };
      const returnedState = settingReducer(state, action);

      expect(returnedState).toBe(initialState);
    });
  });

  describe('getSettings action', () => {
    it('should update isLoading to true', () => {
      const action = getSettings;
      const returnedState = settingReducer(state, action);

      expect(returnedState.isLoading).toBeTrue();
    });
  });

  describe('getSettingsSuccess action', () => {
    it('should update settings to new settings', () => {
      const newSettings: Setting = {
        layout: 'column',
        cardSize: 'large',
        chartType: 'column',
        cardOrder: [
          "population",
          "ER",
          "admission",
          "cost",
          "specialist"
        ],
        sectionOrder: [
          "cards",
          "yearly",
          "charts"
        ],
        chartOrder: [
          "age",
          "location"
        ]
      }

      const action = getSettingsSuccess({ settings : newSettings });
      const returnedState = settingReducer(state, action);

      expect(returnedState).not.toEqual(initialState);
      expect(returnedState.settings).toEqual(newSettings);
      expect(returnedState.isLoading).toBeFalse();
    });
  });

  describe('getSettingsError action', () => {
    it('should update error to error message', () => {
      const errorMsg: string = "mock error msg";

      const action = getSettingsError({ error : errorMsg });
      const returnedState = settingReducer(state, action);

      expect(returnedState).not.toEqual(initialState);
      expect(returnedState.error).toBe(errorMsg);
      expect(returnedState.isLoading).toBeFalse();
    });
  });
});