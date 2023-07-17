import { Component, OnInit, Input, ChangeDetectorRef, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Setting } from 'src/app/state/setting/setting.model';
import { settingsSelector } from 'src/app/state/setting/setting.selector';

@Component({
  selector: 'app-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.css']
})
export class NumberCardComponent implements OnInit {
  @Input() title: string;
  @Input() totalValue: number;
  @Input() previousValue: number;
  @Input() currentValue: number;
  @Input() previousLabel: string = "";
  @Input() currentLabel: string = "";
  @Input() metricCurrency: string = "";
  settings$: Observable<Setting>;
  private subscription: Subscription;

  constructor(private cdRef: ChangeDetectorRef, private store: Store) {
    this.settings$ = this.store.select(settingsSelector)
  }

  @HostBinding('class') cardSizeClass: string;

  ngOnInit(): void {
    this.subscription = this.settings$.subscribe(value => {
      if (value.layout == 'row') {
        if (value.cardSize == 'small') this.cardSizeClass = 'small';
        else this.cardSizeClass = 'large';
      } else {
        if (value.cardSize == 'small') this.cardSizeClass = 'column-small';
        else this.cardSizeClass = '';
      }
    })
  }

}
