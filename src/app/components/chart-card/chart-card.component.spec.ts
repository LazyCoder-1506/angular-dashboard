import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing'

import { ChartCardComponent } from './chart-card.component';
import { Setting } from 'src/app/state/setting/setting.model';
import { settingsSelector } from 'src/app/state/setting/setting.selector';
import { HighchartsChartModule } from 'highcharts-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('ChartCardComponent', () => {
  let component: ChartCardComponent;
  let fixture: ComponentFixture<ChartCardComponent>;

  let mockStore: MockStore<Setting>;

  const title: string = "Population by Age";
  const data: any = [['20', 145], ['30', 280], ['40', 295], ['50', 320], ['60', 200]];
  const chartType: 'donut' | 'column' = 'donut';
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartCardComponent],
      imports: [HighchartsChartModule, BrowserAnimationsModule],
      providers: [ provideMockStore({
        selectors: [
          {
            selector: settingsSelector,
            value: {
              layout: 'row',
              cardSize: 'large',
              chartType: chartType,
              sectionOrder: ['cards', 'charts', 'yearly'],
              cardOrder: ['population', 'ER', 'admission', 'cost', 'specialist'],
              chartOrder: ['age', 'location'],
            }
          }
        ]
      }) ]
    });
    mockStore = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ChartCardComponent);
    component = fixture.componentInstance;
    component.title = title;
    component.data = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const actualTitle = fixture.debugElement.query(By.css('[data-testid="title"]')).nativeElement.textContent;
    expect(actualTitle).toBe(title);
  });

  it('should have chart type', () => {
    let returnedChartType: 'donut' | 'column';
    component.settings$.subscribe(settings => {
      returnedChartType = settings.chartType
    }).unsubscribe();
    expect(returnedChartType).toBe(chartType)
  });

});
