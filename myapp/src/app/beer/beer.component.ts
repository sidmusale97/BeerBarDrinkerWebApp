import { Component, OnInit } from '@angular/core';
import { BeersService, Beer } from '../beers.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  beer: Beer[];
  constructor(
    public beerService: BeersService
    ) { }
    ngOnInit() {
    this.getBeers();
    }
    getBeers() {
    this.beerService.getBeers().subscribe(
    data => {
    this.beer = data;
    },
    error => {
    alert('Could not retrieve a list of beers');
    }
    );
    }
}
