import { Component, OnInit } from '@angular/core';
import {
  IBarChartOptions,
  IChartistAnimationOptions,
  IChartistData, IPieChartOptions
} from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';
@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.css']
})
export class View3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  type: ChartType = 'Pie';
  data:  IChartistData = {
    series: [10, 2, 4, 3]

  };
  options: IPieChartOptions =  {
    donut: true,
    donutWidth: 60,
    height: '100%'
  }
}
