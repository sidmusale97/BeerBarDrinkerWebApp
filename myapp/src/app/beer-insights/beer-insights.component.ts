import { Component, OnInit } from '@angular/core';
import { BeersService, BarSellsMost, BiggestConsumers, TimeBeer } from '../beers.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-beer-insights',
  templateUrl: './beer-insights.component.html',
  styleUrls: ['./beer-insights.component.css']
})
export class BeerInsightsComponent implements OnInit {
	BarSellsMost: BarSellsMost[];
	beerName: string;
	drinker: drinker[];
	TimeBeer: TimeBeer[];
  constructor(
  	public beerService: BeersService,
  	private route: ActivatedRoute
  	) {   
  	route.paramMap.subscribe((paramMap) => {
  	this.beerName = paramMap.get('beer')
  	beerService.getBarSellsMost(this.beerName).subscribe(
  	data => {
  		this.BarSellsMost = data;
 	},
 	error => {
 		alert('Could not retrieve a list')
 	}
  	);

  	beerService.getBiggestConsumers(this.beerName).subscribe(
  	data => {
  		this.drinker = data;
 	},
 	error => {
 		alert('Could not retrieve a list')
 	}
  	);

  	beerService.getTimeBeer(this.beerName).subscribe(
  	data => {
  		this.TimeBeer = data;
 	},
 	error => {
 		alert('Could not retrieve a list')
 	}
  	);
  });
 

  }

  ngOnInit(){

  }



}
