import { Component, OnInit } from '@angular/core';
import {DrinkerService, Transactions} from '../drinker.service'
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
declare const Highcharts: any;
@Component({
  selector: 'app-drinker-info',
  templateUrl: './drinker-info.component.html',
  styleUrls: ['./drinker-info.component.css']
})
export class DrinkerInfoComponent implements OnInit {
  transacts: Transactions[];
  drinkerName: string;
  constructor(
    public drinkerService: DrinkerService,
    private route: ActivatedRoute
  ) { 
    route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');
      drinkerService.getTransactions(this.drinkerName).subscribe(
      data => {
        this.transacts = data;
      });
      drinkerService.getFavItems(this.drinkerName).subscribe(
        data => {
          console.log(data);
          const items = []
          const quantities = [];
          data.forEach(item=>
            {
              items.push(item.item);
              quantities.push(item.quantity);
            });
            this.renderFavItemsChart(items, quantities);
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
      drinkerService.getMonthlySpending(this.drinkerName).subscribe(
        data => {
          console.log(data);
          const months = []
          const totals = [];
          data.forEach(month=>
            {
              months.push(month.month);
              totals.push(month.total);
            });
            this.renderMonthlySpendingChart(months, totals);
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
  ngOnInit(){}
  renderFavItemsChart(items: string[], quantities: number[]){
  Highcharts.chart('FavItemsgraph', {
    chart: {
    type: 'column'
    },
    title: {
    text: 'Favorite Items'
    },
    xAxis: {
    categories: items,
    title: {
    text: 'Item'
    }
    },
    yAxis: {
    min: 0,
    title: {
    text: 'Quantity Ordered'
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
    data: quantities
    }]
    });
    }
    renderMonthlySpendingChart(months: string[], quantities: number[]){
      Highcharts.chart('MonthlySpendinggraph', {
        chart: {
        type: 'column'
        },
        title: {
        text: 'Monthly Spending'
        },
        xAxis: {
        categories: months,
        title: {
        text: 'Month'
        }
        },
        yAxis: {
        min: 0,
        title: {
        text: 'Total'
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
        data: quantities
        }]
        });
        }
}

