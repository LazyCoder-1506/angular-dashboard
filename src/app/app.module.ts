import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { NumberCardComponent } from './components/number-card/number-card.component';
import { ChartCardComponent } from './components/chart-card/chart-card.component';
import { YearlyAnalysisCardComponent } from './components/yearly-analysis-card/yearly-analysis-card.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SettingEffects } from './state/setting/setting.effects';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    HttpClientModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    MatRadioModule,
    DragDropModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([SettingEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: isDevMode() }),
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
