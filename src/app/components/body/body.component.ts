import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSettings } from '../../state/setting/setting.action'
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
  math = Math;


  constructor(private store: Store) {
    this.isLoading$ = this.store.select(isLoadingSelector)
    this.settings$ = this.store.select(settingsSelector)
  }

  ngOnInit(): void {
    this.store.dispatch(getSettings())
    
  }
}
