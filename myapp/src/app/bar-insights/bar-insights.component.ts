import { Component, OnInit } from '@angular/core';
import { BarsService, Spender,Bar, popItem } from '../bars.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
declare const Highcharts: any;
@Component({
  selector: 'app-bar-insights',
  templateUrl: './bar-insights.component.html',
  styleUrls: ['./bar-insights.component.css']
})
export class BarInsightsComponent implements OnInit {
  barName: string;
  bar: Bar;
  constructor(
    private barService: BarsService,
    private route: ActivatedRoute
  ) { 
    route.paramMap.subscribe((paramMap) => {
      this.barName = paramMap.get('bar')
      barService.getLargeSpenders(this.barName).subscribe(
        data => {
          console.log(data);
          const drinkers = [];
          const totals = [];

          data.forEach(spender =>{
            drinkers.push(spender.name);
            totals.push(spender.total);
          });
          this.renderChart(drinkers, totals);
        },
        (error: HttpResponse<any>)=>{
          if (error.status === 404){
            alert('Bar Not Found');
          }
          else{
            console.error(error.status + ' - ' + error.body);
            alert('check console'); 
          }
        }
      );
    });
  }

  ngOnInit() {}
  renderChart(drinkers: string[], counts: number[]) {
    Highcharts.chart('topSpendersgraph', {
    chart: {
    type: 'column'
    },
    title: {
    text: 'Top Spenders'
    },
    xAxis: {
    categories: drinkers,
    title: {
    text: 'Drinker'
    }
    },
    yAxis: {
    min: 0,
    title: {
    text: 'Total Spent at Bar'
    },
    labels: {
    overflow: 'justify'
    }
    },
    plotOptions: {
    bar: {
    dataLabels: {
    enabled: true
    }
    }
    },
    legend: {
    enabled: false
    },
    credits: {
    enabled: false
    },
    series: [{
    data: counts
    }]
    });
    }
}
