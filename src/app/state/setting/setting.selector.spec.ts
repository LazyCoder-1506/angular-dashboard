import { SettingState } from "./setting.reducer";
import { errorSelector, isLoadingSelector, settingsSelector } from "./setting.selector";

describe('Selectors', () => {
  const initialState: SettingState = {
    settings: {
      layout: 'column',
      cardSize: 'small',
      chartType: 'column',
      sectionOrder: ['mock1', 'mock2', 'mock3'],
      cardOrder: ['population', 'ER', 'admission', 'cost', 'specialist'],
      chartOrder: ['age', 'location'],
    },
    isLoading: true,
    error: 'mock error'
  }

  it('should select isLoading', () => {
    const result = isLoadingSelector.projector(initialState);
    expect(result).toBeTrue()
  });

  it('should select error', () => {
    const result = errorSelector.projector(initialState);
    expect(result).toBe('mock error')
  });

  it('should select settings', () => {
    const result = settingsSelector.projector(initialState);
    expect(result).toBeTruthy()
    expect(result.layout).toBe('column')
    expect(result.cardSize).toBe('small')
    expect(result.chartOrder[0]).toBe('age')
    expect(result.sectionOrder[1]).toBe('mock2')
    expect(result.cardOrder[4]).toBe('specialist')
  });
});