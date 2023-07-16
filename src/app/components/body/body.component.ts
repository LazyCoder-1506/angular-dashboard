import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SettingActions from '../../state/setting/setting.action'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  ageData: any = [['20', 145], ['30', 280], ['40', 295], ['50', 320], ['60', 200]];
  locationData: any = [['Alabama', 145], ['Florida', 250], ['Louisiana', 195], ['Kentucky', 220], ['Virginia', 200], ['Georgia', 190]];


  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(SettingActions.getSettings())
  }
}
