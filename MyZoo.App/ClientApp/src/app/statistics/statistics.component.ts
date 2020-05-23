import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
import { ZooDataService } from '../services/zoo-data.service';
import { KeyValue } from '@angular/common';
import { KeyValuePair } from '../interfaces/key-value-pair';

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

  
  animalsByTypeChartLabels: Array<string> = [];
  animalsByTypeChartData: Array<number> = [];

  animalsByGenderChartLabels: Array<string> = [];
  animalsByGenderChartData: Array<number> = [];


  constructor(private service: ZooDataService) { 
    this.getStatistics();
  }

  ngOnInit(): void {
  }

  animalsCount:number;
  birthdayName:string;


 
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

  getStatistics() {
    this.service.getStatisticsByType().subscribe(res=>{
      console.log(res);
      this.animalsByTypeChartLabels = [];
      this.animalsByTypeChartData = [];
      var data = <KeyValuePair[]>res;
      data.forEach(item => {
        this.animalsByTypeChartLabels.push(item.key);
        this.animalsByTypeChartData.push(item.value);
      });
      
    },res => {console.error(res);
    });

    this.service.getStatisticsByGender().subscribe(res=>{
      console.log(res);
      this.animalsByGenderChartLabels = [];
      this.animalsByGenderChartData = [];
      var data = <KeyValuePair[]>res;
      data.forEach(item => {
        this.animalsByGenderChartLabels.push(item.key);
        this.animalsByGenderChartData.push(item.value);
      });
    },res => {console.error(res);
    });
    this.service.getStatisticsByAge().subscribe(res=>{
      console.log(res);
    },res => {console.error(res);
    });
  }

}
