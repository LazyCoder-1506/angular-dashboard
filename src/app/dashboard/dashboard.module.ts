import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { settingReducer } from '../state/setting/setting.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('setting', settingReducer)
  ]
})
export class DashboardModule { }
