import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Highcharts from 'highcharts';
import { Observable, Subscription } from 'rxjs';
import { Setting } from 'src/app/state/setting/setting.model';
import { settingsSelector } from 'src/app/state/setting/setting.selector';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.css']
})
export class ChartCardComponent implements OnInit {
  @Input() title: string;
  @Input() data: any;
  settings$: Observable<Setting>;
  private subscription: Subscription;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: object;

  constructor(private store: Store) {
    this.settings$ = this.store.select(settingsSelector)
  }

  ngOnInit(): void {
    const donutChartOptions: object = {
      title: {
        text: undefined
      },
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
            format: '<b>{point.y}%</b>',
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
    const columnChartOptions: object = {
      title: {
        text: undefined
      },
      tooltip: {
        formatter: function() {
          const pcnt = (this.y / this.series.data.map(p => p.y).reduce((a, b) => a + b, 0)) * 100;
          return Highcharts.numberFormat(pcnt, 1) + '%';
        }
      },
      xAxis: {
        categories: this.data.map(pair => pair[0])
      },
      yAxis: {
        title: {
          text: undefined
        },
      },
      series: [
        {
          type: 'column',
          dataLabels: {
            enabled: true,
          },
          data: this.data,
          name: this.title
        },
      ],
    };

    this.subscription = this.settings$.subscribe(value => {
      if (value.chartType == 'donut') this.chartOptions = donutChartOptions
      else this.chartOptions = columnChartOptions
    })
  }
}
