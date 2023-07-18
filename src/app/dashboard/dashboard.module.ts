import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { settingReducer } from '../state/setting/setting.reducer';

import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { BodyComponent } from '../components/body/body.component';
import { NumberCardComponent } from '../components/number-card/number-card.component';
import { ChartCardComponent } from '../components/chart-card/chart-card.component';
import { YearlyAnalysisCardComponent } from '../components/yearly-analysis-card/yearly-analysis-card.component';
import { SettingsDialogComponent } from '../components/settings-dialog/settings-dialog.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    BodyComponent,
    NumberCardComponent,
    ChartCardComponent,
    YearlyAnalysisCardComponent,
    SettingsDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HighchartsChartModule,
    MatTabsModule,
    MatDialogModule,
    MatRadioModule,
    DragDropModule,
    StoreModule.forFeature('setting', settingReducer)
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    BodyComponent,
    NumberCardComponent,
    ChartCardComponent,
    YearlyAnalysisCardComponent,
    SettingsDialogComponent
  ]
})
export class DashboardModule { }
