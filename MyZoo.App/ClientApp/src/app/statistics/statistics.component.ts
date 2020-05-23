import { Component, OnInit, Input } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
import { ZooDataService } from '../services/zoo-data.service';
import { KeyValue } from '@angular/common';
import { KeyValuePair } from '../interfaces/key-value-pair';
import { Subscription, Observable } from 'rxjs';

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

  private eventsSubscription: Subscription;

  @Input() events: Observable<void>;
  
  showProgressBar: boolean;

  
  animalsByTypeChartLabels: Array<string> = [];
  animalsByTypeChartData: Array<number> = [];

  animalsByGenderChartLabels: Array<string> = [];
  animalsByGenderChartData: Array<number> = [];

  animalsByAgeChartLabels: Array<string> = [];
  animalsByAgeChartData: Array<number> = [];


  constructor(private service: ZooDataService) { 
    this.getStatistics();
  }

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe(() => this.getStatistics());
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  animalsCount:number;
  birthdayName:string;



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
      this.animalsByAgeChartLabels = [];
      this.animalsByAgeChartData = [];
      var data = <KeyValuePair[]>res;
      data.forEach(item => {
        this.animalsByAgeChartLabels.push(item.key);
        this.animalsByAgeChartData.push(item.value);
      });
      
    },res => {console.error(res);
    });
  }

}
