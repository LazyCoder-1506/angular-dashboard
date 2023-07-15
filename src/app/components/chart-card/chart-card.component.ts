import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.css']
})
export class ChartCardComponent implements OnInit {
  @Input() title: string;
  @Input() data: any;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: object;

  ngOnInit(): void {
    this.chartOptions = {
      title: {
        text: undefined
      },
      // legend: {
      //   align: 'right',
      //   layout: 'vertical',
      //   verticalAlign: 'middle'
      // },
      plotOptions: {
        pie: {
          slicedOffset: 0
        }
      },
      series: [
        {
          type: 'pie',
          size: '100%',
          innerSize: '60%',
          showInLegend: true,
          dataLabels: {
            enabled: true,
            crop: false,
            distance: '-20%',
            format: '<b>{point.percentage:.1f}%</b>',
            connectorWidth: 0,
            style: {
              textOutline: 'none',
            }
          },
          data: this.data,
          name: this.title
        },
      ],
    };
  }
}
