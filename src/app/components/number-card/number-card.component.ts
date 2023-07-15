import { Component, OnInit, Input, ChangeDetectorRef, HostBinding } from '@angular/core';

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

  constructor(private cdRef: ChangeDetectorRef) {}

  // cardSize: string = 'large';

  @HostBinding('class') cardSize: string = 'large';

  ngOnInit(): void {
    // set size of card here by checking state
    this.cardSize = 'large';
  }

}
