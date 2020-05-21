import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

export interface Element {
  name: string;
  pic: string;
  weight: number;
  designation: string;
}

const ELEMENT_DATA: Element[] = []

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  showProgressBar: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  animalsCount:number = 5;
  birthdayName:string = "Alice"

  animalsByTypeChartLabels: Array<string> = ['Tiger','Lion'];
  animalsByTypeChartData: Array<number> = [7,3];

  animalsByGenderChartLabels: Array<string> = ['Male','Female'];
  animalsByGenderChartData: Array<number> = [3,14];

  animalsByAgeChartLabels: Array<string> = ['3','5','7','9','11'];
  animalsByAgeChartData: Array<number> = [2,1,1,1,1];

  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    barThickness: 10,
  };
 

  doughnutChartOptions: any = {     legend: { position: 'right' } };
  doughnutChartType = 'doughnut';
  horizontalBarChartType = 'horizontalBar';
  barChartType = 'bar';

  showChartLegend = true;
  hideChartLegend = false;

}
