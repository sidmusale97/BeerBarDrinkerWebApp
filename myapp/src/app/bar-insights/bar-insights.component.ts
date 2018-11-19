import { Component, OnInit } from '@angular/core';
import { BarsService} from '../bars.service';
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
          this.renderTopSpenderChart(drinkers, totals);
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

      barService.getPopBeers(this.barName).subscribe(
        data => {
          console.log(data);
          const beers = [];
          const quantitys = [];
          data.forEach(beer =>{
            beers.push(beer.name);
            quantitys.push(beer.quantity);
          });
          this.renderPopBeersChart(beers, quantitys);
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

      barService.getTopManfs(this.barName).subscribe(
        data => {
          console.log(data);
          const manfs = [];
          const quantitys = [];
          data.forEach(manf =>{
            manfs.push(manf.manf);
            quantitys.push(manf.quantity);
          });
          
          this.renderTopManfsChart(manfs, quantitys);
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
      barService.getHourTimeDist(this.barName).subscribe(
        data => {
          console.log(data);
          const hours = [];
          const quantitys = [];
          data.forEach(hour =>{
            hours.push(hour.hour);
            quantitys.push(hour.quantity);
          });
          this.renderHourDistChart(hours, quantitys);
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
      barService.getWeekTimeDist(this.barName).subscribe(
        data => {
          console.log(data);
          const days = [];
          const quantitys = [];
          data.forEach(day =>{
            days.push(day.day);
            quantitys.push(day.quantity);
          });
          this.renderWeekDistChart(days, quantitys);
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
  renderTopSpenderChart(drinkers: string[], counts: number[]) {
    Highcharts.chart('TopSpendersgraph', {
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
    renderPopBeersChart(beers: string[], counts: number[]) {
      Highcharts.chart('PopBeersgraph', {
      chart: {
      type: 'column'
      },
      title: {
      text: 'Popular Beers'
      },
      xAxis: {
      categories: beers,
      title: {
      text: 'Beer'
      }
      },
      yAxis: {
      min: 0,
      title: {
      text: 'Quantity Sold'
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
      renderTopManfsChart(manfs: string[], counts: number[]) {
        Highcharts.chart('TopManfsgraph', {
        chart: {
        type: 'column'
        },
        title: {
        text: 'Top Manufacturers for this Bar'
        },
        xAxis: {
        categories: manfs,
        title: {
        text: 'Manufactuerers'
        }
        },
        yAxis: {
        min: 0,
        title: {
        text: 'Number of Beers sold'
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
        renderHourDistChart(hours: number[], counts: number[]) {
          Highcharts.chart('HourDistgraph', {
          chart: {
          type: 'column'
          },
          title: {
          text: 'Hourly Time Distribution'
          },
          xAxis: {
          categories: hours,
          title: {
          text: 'Hour'
          }
          },
          yAxis: {
          min: 0,
          title: {
          text: 'Items Sold'
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
          renderWeekDistChart(days: number[], counts: number[]) {
            Highcharts.chart('WeekDistgraph', {
            chart: {
            type: 'column'
            },
            title: {
            text: 'Weekly Time Distribution'
            },
            xAxis: {
            categories: days,
            title: {
            text: 'Day'
            }
            },
            yAxis: {
            min: 0,
            title: {
            text: 'Quantity Sold'
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
