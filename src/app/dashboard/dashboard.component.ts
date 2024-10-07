import { Component, OnInit } from '@angular/core';
import { MockApiService } from '../mock-api.service';
import { ChartOptions } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  portfolioData: any;
  lineChartData: Array<any> = [];
  lineChartLabels: Array<any> = [];
  pieChartLabels:Array<string>=[]
  pieChartDatasets:Array<any>= [];
  pieChartLegend = true;

  constructor(private mockApi: MockApiService) {}

  ngOnInit(): void {
    this.mockApi.getPortfolioData().subscribe(data => {
      this.portfolioData = data;
      this.lineChartData = [
        { data: data.performance, label: 'Portfolio Performance' }
      ];
      this.lineChartLabels = data.dates;
            this.pieChartDatasets=[
        {data:Object.values(data.allocation),label:'Allocation'}
      ]
      this.pieChartLabels=Object.keys(data.allocation)
    });
  }
}
