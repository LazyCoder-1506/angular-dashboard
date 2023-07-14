import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-yearly-analysis-card',
  templateUrl: './yearly-analysis-card.component.html',
  styleUrls: ['./yearly-analysis-card.component.css'],
})
export class YearlyAnalysisCardComponent implements OnInit {
  admissionChart: typeof Highcharts = Highcharts;
  admissionOptions: object;

  ngOnInit(): void {
    this.admissionOptions = {
      title: {
        text: undefined
      },
      xAxis: [{
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      }],
      yAxis: [{
        // primary axis
        title: {
          text: 'Average GAD'
        },
        min: 0,
        max: 20,
        tickInterval: 5,
        tickAmount: 5,
        gridLineWidth: 0,
      }, {
        // secondary axis
        title: {
          text: 'Average Admission'
        },
        opposite: true,
        min: 0,
        max: 2.5,
        tickInterval: 0.5,
      }],
      tooltip: {
        shared: true,
      },
      legend: {},
      series: [
        {
          name: 'Avg Admission 2021',
          type: 'column',
          yAxis: 1,
          data: [null, null, null, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        }, {
          name: 'Avg Admission 2022',
          type: 'column',
          yAxis: 1,
          data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
        }, {
          name: 'Avg Admission 2023',
          type: 'column',
          yAxis: 1,
          data: [2, 2, 2, 2],
        }, {
          name: 'Avg GAD 2021',
          type: 'spline',
          yAxis: 0,
          data: [null, null, null, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        }, {
          name: 'Avg GAD 2022',
          type: 'spline',
          yAxis: 0,
          data: [5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 8, 8],
        }, {
          name: 'Avg GAD 2023',
          type: 'spline',
          yAxis: 0,
          data: [9, 11, 10, 10],
        }, 
      ],
    };
  }
}
