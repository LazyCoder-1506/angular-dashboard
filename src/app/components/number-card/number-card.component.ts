import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.css']
})
export class NumberCardComponent {
  @Input() title: string;
  @Input() totalValue: number;
  @Input() previousValue: number;
  @Input() currentValue: number;
  @Input() previousLabel: string = "";
  @Input() currentLabel: string = "";
  @Input() metricCurrency: string = "";

}
