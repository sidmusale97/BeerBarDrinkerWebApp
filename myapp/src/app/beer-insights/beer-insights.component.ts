import { Component, OnInit } from '@angular/core';
import { BeersService, BarSellsMost } from '../beers.service';


@Component({
  selector: 'app-beer-insights',
  templateUrl: './beer-insights.component.html',
  styleUrls: ['./beer-insights.component.css']
})
export class BeerInsightsComponent implements OnInit {
	BarSellsMost: BarSellsMost[];
  constructor(
  	public beerService: BeersService
  	) { }

  ngOnInit() {
  	this.getBarSellsMost();
  }

  getBarSellsMost(){
  	alert(this.beerService.getBarSellsMost())
  	this.beerService.getBarSellsMost().subscribe(
  	data => {
  		this.BarSellsMost = data;
  	},
  	error => {
  		alert('Could not retrieve a list');
  	}
  	);
  }

}
