import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as SettingActions from '../../state/setting/setting.action'
import { SettingService } from 'src/app/services/setting.service';
import { Observable, of } from 'rxjs';
import { Setting } from 'src/app/state/setting/setting.model';
import { isLoadingSelector, settingsSelector } from 'src/app/state/setting/setting.selector';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  ageData: any = [['20', 145], ['30', 280], ['40', 295], ['50', 320], ['60', 200]];
  locationData: any = [['Alabama', 145], ['Florida', 250], ['Louisiana', 195], ['Kentucky', 220], ['Virginia', 200], ['Georgia', 190]];
  settings$: Observable<Setting>;
  isLoading$: Observable<boolean>;


  constructor(private store: Store, private service: SettingService) {
    this.isLoading$ = this.store.select(isLoadingSelector)
    this.settings$ = this.store.select(settingsSelector)
  }

  ngOnInit(): void {
    this.store.dispatch(SettingActions.getSettings())
    
  }
}
