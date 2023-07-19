import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyAnalysisCardComponent } from './yearly-analysis-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HighchartsChartModule } from 'highcharts-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('YearlyAnalysisCardComponent', () => {
  let component: YearlyAnalysisCardComponent;
  let fixture: ComponentFixture<YearlyAnalysisCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearlyAnalysisCardComponent],
      imports: [MatTabsModule, HighchartsChartModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(YearlyAnalysisCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
