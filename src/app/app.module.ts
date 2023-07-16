import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

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
    BrowserModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatTabsModule,
    StoreModule.forRoot({ setting: settingReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
