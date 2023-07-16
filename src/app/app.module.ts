import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';

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
import { settingReducer } from './state/setting/setting.reducer';
import { SettingEffects } from './state/setting/setting.effects';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    BodyComponent,
    NumberCardComponent,
    ChartCardComponent,
    YearlyAnalysisCardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatTabsModule,
    StoreModule.forRoot({ state: settingReducer }),
    EffectsModule.forRoot([SettingEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
